package com.siat.web.member;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MemberService {
	
	@Autowired
	private MemberRepository memberRepository;
	
	public List<Member> findAll() {
		List<Member> memberList = memberRepository.findAll();
		return memberList;
	}
	
	public Member findById(Member member) {
		Member findMember = memberRepository.findById(member.getId());
		return findMember;
	}
	
	public Member addMember(Member member) {
		return memberRepository.save(member);
	}
	
	public Member updateMember(Member member) {
		Member findMember = memberRepository.findById(member.getMember_id()).orElseThrow();
		findMember.setName(member.getName());
		findMember.setId(member.getId());
		findMember.setPassword(member.getPassword());
		findMember.setSelectOption(member.getSelectOption());
		return memberRepository.save(findMember);
	}
	
	public void deleteMemberById(Long id) {
		memberRepository.deleteById(id);
	}
}
