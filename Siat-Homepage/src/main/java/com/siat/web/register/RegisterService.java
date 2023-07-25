package com.siat.web.register;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class RegisterService {
	
	@Autowired
	private RegisterRepository registerRepo;
	
	public RegisterEntity register(RegisterEntity register) {
		return registerRepo.save(register);		
	}

	public ResponseEntity<RegisterEntity> getRegister(Long register_id) {
		RegisterEntity register = registerRepo.findById(register_id).orElse(null);
		return ResponseEntity.ok(register);
	}

	public ResponseEntity<RegisterEntity> updateRegister(Long register_id, RegisterEntity updateRegister) {
		RegisterEntity register = registerRepo.findById(register_id).orElse(null);
		
		register.setJob(updateRegister.getJob());
		register.setName(updateRegister.getName());
		register.setBirth(updateRegister.getBirth());
		register.setAddress(updateRegister.getAddress());
		register.setP_number(updateRegister.getP_number());
		
		RegisterEntity endUpdateRegister = registerRepo.save(register);
		
		return ResponseEntity.ok(endUpdateRegister);
	}

	public ResponseEntity<RegisterEntity> deleteRegister(Long register_id) {
		registerRepo.deleteById(register_id);
		return ResponseEntity.ok().build();
	}

	public List<RegisterEntity> getRegisterList() {
		return registerRepo.findAll();
	}

}
