package com.siat.web.employment;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class EmploymentService {
	
	@Autowired
	private EmploymentRepository employRepo;

	public Employment insertEmployment(Employment employ) {
		return employRepo.save(employ);
	}

	public List<Employment> employmentGetList() {
		return employRepo.findAll();
	}

	public ResponseEntity<Employment> getEmployment(Long employment_id) {
		Employment employ = employRepo.findById(employment_id).orElse(null);
		return ResponseEntity.ok(employ);
	}

	public ResponseEntity<Employment> updateEmployment(Long employment_id, Employment employ) {
		Employment updateEmploy = employRepo.findById(employment_id).orElse(null);
		
		updateEmploy.setCompanyName(employ.getCompanyName());
		updateEmploy.setCompanyNum(employ.getCompanyNum());
		updateEmploy.setCompanyAddr(employ.getCompanyAddr());
		updateEmploy.setCompanyCall(employ.getCompanyCall());
		updateEmploy.setName(employ.getName());
		updateEmploy.setSpot(employ.getSpot());
		updateEmploy.setType(employ.getType());
		updateEmploy.setWork(employ.getWork());
		
		Employment endUpdate = employRepo.save(updateEmploy);
		
		return ResponseEntity.ok(endUpdate);
	}

	public ResponseEntity<Employment> deleteEmployment(Long employment_id) {
		employRepo.deleteById(employment_id);
		return ResponseEntity.ok().build();
	}

}
