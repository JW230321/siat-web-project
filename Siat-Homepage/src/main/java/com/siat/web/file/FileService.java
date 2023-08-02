package com.siat.web.file;

import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.util.UriUtils;

@Service
public class FileService {

	@Autowired
	private FileRepository fileRepo;

	@Value("${spring.servlet.multipart.location}")
	private String uploadPath;

	public void init() {
		try {
			Files.createDirectories(Paths.get(uploadPath));
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	  public List<UploadFile> getImageFiles() {
	        List<UploadFile> imageFiles = fileRepo.findByFileType("image");
	        for (UploadFile file : imageFiles) {
	            String storedName = file.getStoredName();
	            storedName = storedName.replace("\\", "/");
	            storedName = storedName.substring(storedName.lastIndexOf("/"));
	            file.setStoredName(storedName);
	            System.out.println(storedName); // 확인용 출력
	        }
	        return imageFiles;
	    }
	
	public UploadFile uploadFile(MultipartFile file) {
		try {
			Path root = Paths.get(uploadPath);
			if (!Files.exists(root)) {
				init();
			}

			String storeFileName = UUID.randomUUID().toString() + "_" + file.getOriginalFilename();
	        Path storedFilePath = root.resolve(storeFileName);

			try (InputStream inputStream = file.getInputStream()) {
				Files.copy(inputStream, storedFilePath, StandardCopyOption.REPLACE_EXISTING);
			}
			
			// UploadFile 엔티티 생성
            UploadFile uploadFile = new UploadFile();
            uploadFile.setOriginName(storeFileName);
            uploadFile.setStoredName(storedFilePath.toString());
            
			// 이미지 파일 여부를 판별하여 file_type을 설정
			String fileExtension = getFileExtension(storeFileName);
			if (isImageFile(fileExtension)) {
				uploadFile.setFileType("image");
			} else {
				uploadFile.setFileType("other");
			}
			// UploadFile 엔티티를 데이터베이스에 저장
            UploadFile savedFile = fileRepo.save(uploadFile);
            return savedFile;

		} catch (IOException e) {
			e.printStackTrace();
            return null;
		}
	}

	private String getFileExtension(String fileName) {
		int dotIndex = fileName.lastIndexOf('.');
		return (dotIndex == -1) ? "" : fileName.substring(dotIndex + 1).toLowerCase();
	}

	private boolean isImageFile(String fileExtension) {
		// 이미지 파일 확장자 리스트
		List<String> imageExtensions = Arrays.asList("jpg", "jpeg", "png", "gif");
		return imageExtensions.contains(fileExtension);
	}

	public Path load(String fileName) {
		return Paths.get(uploadPath).resolve(fileName);
	}

	public ResponseEntity<Resource> downloadFile(Long uploadfile_id) throws IOException {
		UploadFile uploadFile = fileRepo.findById(uploadfile_id).orElse(null);
		Path file = Paths.get(uploadFile.getStoredName());
		try {
			Resource resource = new UrlResource(file.toUri());

			if (resource != null && resource.exists() && resource.isReadable()) {
				String contentType = Files.probeContentType(file);

				HttpHeaders headers = new HttpHeaders();
				if (contentType == null || contentType.isEmpty()) {
					contentType = "application/x-msdownload";
				}
				headers.setContentType(MediaType.parseMediaType(contentType));

				String encodedFileName = UriUtils.encode(uploadFile.getOriginName(), StandardCharsets.UTF_8);
				headers.setContentDispositionFormData("attachment", encodedFileName);

				return ResponseEntity.ok().headers(headers).body(resource);
			} else {
				System.out.println(uploadFile.getOriginName() + "파일을 읽을 수 없습니다.");
			}

		} catch (MalformedURLException e) {
			e.printStackTrace();
		}

		return null;
	}
}
