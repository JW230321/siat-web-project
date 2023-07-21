package com.siat.web;

import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.siat.web.comment.Comment;
import com.siat.web.comment.CommentRepository;

@SpringBootTest
class ApplicationTests {
	
	@Autowired
	private CommentRepository cr;

	@Test
	void contextLoads() {

		Optional<Comment> oc = this.cr.findById(1L);
		if(oc.isPresent()) {
			Comment c = oc.get();
			this.cr.delete(c);
		}
		
	}

}
