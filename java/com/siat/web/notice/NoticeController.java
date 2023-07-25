package com.siat.web.notice;

import java.util.List;
import java.util.Map;

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
@RequestMapping("/api")
@RestController
public class NoticeController {

	@Autowired
	private NoticeService noticeService;
	
	@GetMapping("/noticeList")
	public List<Notice> noticeList() {
	    
	    return noticeService.findAll();
	}
	
	@PostMapping("/insertNotice")
	public Notice insertNotice(@RequestBody Notice notice) {
		return noticeService.insertNotice(notice);
	}
	
	@GetMapping("/detailNotice/{notice_id}")
    public ResponseEntity<Notice> getNoticeById(@PathVariable Long notice_id) {
        return noticeService.detailNotice(notice_id);
    }
	
	@PostMapping("/modifyNotice/{notice_id}")
	public ResponseEntity<Notice> updateNotice(@PathVariable Long notice_id, @RequestBody Notice notice){
		return noticeService.updateNotice(notice_id, notice);
	}
	
	@DeleteMapping("/noticeList/{notice_id}")
	public ResponseEntity<Map<String, Boolean>> deleteNotice(@PathVariable Long notice_id){
		return noticeService.deleteNotice(notice_id);
	}
	
	
	
	
}