package com.siat.web.admin;

import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"})
@RestController
@RequestMapping("/api")
public class AdminController {
	
	@Autowired
	private AdminService adminService;
	
//	@Autowired
//	private AdminRepository adminRepository;
	
	@PostMapping("/admin")
	public Admin findById(@RequestBody Admin admin) {
		return adminService.findById(admin);
	}
	
//	@GetMapping("/")
//	public void save() {
//		adminRepository.save(new Admin("admin123","admin123"));		
//	}
	
}
