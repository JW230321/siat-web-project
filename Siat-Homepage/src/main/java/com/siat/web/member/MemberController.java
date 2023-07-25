package com.siat.web.member;

import java.util.List; 

import org.springframework.beans.factory.annotation.Autowired;
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
@RequestMapping("/api")
public class MemberController {
	
	@Autowired
	private MemberService memberService;
	
	@GetMapping("/userBoard")
	public List<Member> userList() {
		return memberService.findAll();
	}
	
	@GetMapping("/memberList")
	public List<Member> memberList() {
		return memberService.findAll();
	}
	
	@PostMapping("/member")
	public Member saveMember(@RequestBody Member member) {
		return memberService.addMember(member);
	}
	
	@PostMapping("/login")
	public Member findeById(@RequestBody Member member) {
		return memberService.findById(member);
	}
	
	@PostMapping("/update")
	public Member updateMember(@RequestBody Member member) {
		return memberService.updateMember(member);
	}
	
	@DeleteMapping("/delete/{id}")
	public void deleteMember(@PathVariable Long id) {
	    memberService.deleteMemberById(id);
	}
	
	
}
