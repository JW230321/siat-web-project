package com.siat.web.Member;

import java.util.List;
import java.util.Optional;

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
}
