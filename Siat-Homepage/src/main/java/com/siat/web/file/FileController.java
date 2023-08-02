package com.siat.web.file;

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

@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"})
@RestController
public class FileController {
	
	@Autowired
	private FileService fileService;
	
	@GetMapping("/download")
	public ResponseEntity<Resource> downloadFile(@RequestParam("uploadfile_id") Long uploadfile_id) throws IOException {
		ResponseEntity<Resource> file = fileService.downloadFile(uploadfile_id);
		
		return file;
	}
}
