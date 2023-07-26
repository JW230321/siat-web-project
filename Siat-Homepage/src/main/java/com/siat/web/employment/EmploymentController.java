package com.siat.web.employment;

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
public class EmploymentController {
	
	@Autowired
	private EmploymentService employService;

	@PostMapping("/employment")
	public Employment insertEmployment(@RequestBody Employment employ) {
		return employService.insertEmployment(employ);
	}
	
	@GetMapping("/employment")
	public List<Employment> employmentGetList() {
		return employService.employmentGetList();
	}
	
	@GetMapping("/employment/{employment_id}")
	public ResponseEntity<Employment> getEmployment(@PathVariable Long employment_id) {
		return employService.getEmployment(employment_id);
	}
	
	@PostMapping("/updateEmployment/{employment_id}")
	public ResponseEntity<Employment> updateEmployment(@PathVariable Long employment_id, @RequestBody Employment employ) {
		return employService.updateEmployment(employment_id, employ);
	}
	
	@DeleteMapping("/deleteEmployment/{employment_id}")
	public ResponseEntity<Employment> deleteEmployment(@PathVariable Long employment_id) {
		return employService.deleteEmployment(employment_id);
	}
}
