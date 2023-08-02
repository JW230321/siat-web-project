package org.comstudy.file;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class FileController {
	
	@Autowired
	private FileService fileService;
	
	@PostMapping("/upload")
	public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile file) throws IllegalStateException, IOException {
		fileService.uploadFile(file);
		return new ResponseEntity<>("", HttpStatus.OK);
	}
	
	@GetMapping("/files")
	public List<UploadFile> getFileList() {
		return fileService.getFileList();
	}
	
//	@PostMapping("/download")
//	public ResponseEntity<Resource> downloadFile(@RequestParam String fileName) {
//		ResponseEntity<Resource> file = fileService.downloadFile(fileName);
//		
//		return file;
//	}
	
	@GetMapping("/download")
	public ResponseEntity<Resource> downloadFile(@RequestParam("file_id") Long file_id) throws IOException {
		ResponseEntity<Resource> file = fileService.downloadFile(file_id);
		
		return file;
	}
}
