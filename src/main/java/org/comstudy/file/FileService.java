package org.comstudy.file;

import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;

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
	
	public void uploadFile(MultipartFile file) {
		try {
			Path root = Paths.get(uploadPath);
			if(!Files.exists(root)) {
				init();
			}
			
			String storeFileName = file.getOriginalFilename();
			Path storedFilePath = root.resolve(storeFileName);
			
			try (InputStream inputStream = file.getInputStream()){
				Files.copy(inputStream, storedFilePath, StandardCopyOption.REPLACE_EXISTING);
			}
			
			UploadFile uploadFile = new UploadFile();
			uploadFile.setOrigin_name(file.getOriginalFilename());
			uploadFile.setStored_name(storedFilePath.toString());
			fileRepo.save(uploadFile);
			
		} catch (IOException e) {
			e.printStackTrace();
		}
		
	}
	
	public Path load(String fileName) {
		return Paths.get(uploadPath).resolve(fileName);
	}

//	public ResponseEntity<Resource> downloadFile(String fileName) {
//		try {
//
//			Path file = load(fileName);
//			Resource resource = new UrlResource(file.toUri());
//			
//			if(resource != null && resource.exists() && resource.isReadable()) {
//				String encodedFileName = UriUtils.encode(fileName, StandardCharsets.UTF_8);
//				HttpHeaders headers = new HttpHeaders();
//				headers.setContentDispositionFormData("attachment", encodedFileName);
//				
//				return ResponseEntity.ok().headers(headers).body(resource);
//			} else {
//				System.out.println(fileName + "파일을 읽을 수 없습니다.");
//			}
//			
//		} catch (MalformedURLException e) {
//			e.printStackTrace();
//		}
//		return null;
//	}

	public List<UploadFile> getFileList() {
		return fileRepo.findAll();
	}

	public ResponseEntity<Resource> downloadFile(Long file_id) throws IOException {
		UploadFile uploadFile = fileRepo.findById(file_id).orElse(null);
		Path file = Paths.get(uploadFile.getStored_name());
		try {
			Resource resource = new UrlResource(file.toUri());
			
			if(resource != null && resource.exists() && resource.isReadable()) {
				String contentType = Files.probeContentType(file);
				
				HttpHeaders headers = new HttpHeaders();
				if(contentType == null || contentType.isEmpty()) {
					contentType = "application/x-msdownload";
				}
				headers.setContentType(MediaType.parseMediaType(contentType));
				
				String encodedFileName = UriUtils.encode(uploadFile.getOrigin_name(), StandardCharsets.UTF_8);
				headers.setContentDispositionFormData("attachment", encodedFileName);
				
				return ResponseEntity.ok().headers(headers).body(resource);
			} else {
				System.out.println(uploadFile.getOrigin_name() + "파일을 읽을 수 없습니다.");
			}
			
		} catch (MalformedURLException e) {
			e.printStackTrace();
		}

		return null;
	}
}
