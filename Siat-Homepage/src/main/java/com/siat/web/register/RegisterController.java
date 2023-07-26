package com.siat.web.register;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:3001"})
@RestController
@RequestMapping("api")
public class RegisterController {
	
	@Autowired
	private RegisterService registerService;
	
	@PostMapping("/input")
	public RegisterEntity register(@RequestBody RegisterEntity register) {		
		return registerService.register(register);		
	}
	
	@PostMapping("/input2")
	public RegisterEntity register2(@RequestBody RegisterEntity register) {		
		return registerService.register(register);		
	}
	
	@GetMapping("/read")
	public List<RegisterEntity> getRegisterList() {
		return registerService.getRegisterList();
	}
	
	@GetMapping("/read/{register_id}")
	public ResponseEntity<RegisterEntity> getRegister(@PathVariable Long register_id) {
		return registerService.getRegister(register_id);
	}
	
	@PostMapping("/update/{register_id}")
	public ResponseEntity<RegisterEntity> updateRegister(@PathVariable Long register_id, @RequestBody RegisterEntity register) {
		return registerService.updateRegister(register_id, register);
	}
	
	@DeleteMapping("/{register_id}")
	public ResponseEntity<RegisterEntity> deleteRegister(@PathVariable Long register_id) {
		return registerService.deleteRegister(register_id);
	}
}
