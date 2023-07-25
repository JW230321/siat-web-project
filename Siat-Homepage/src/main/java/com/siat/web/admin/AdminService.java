package com.siat.web.admin;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class AdminService {
	
	@Autowired
	private AdminRepository adminRepository;
	
	public Admin findById(Admin admin) {
		Admin findMember = adminRepository.findById(admin.getId());
		return findMember;
	}
	
}
