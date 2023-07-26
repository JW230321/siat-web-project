package com.siat.web.notice;



import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional 
public class NoticeService {

	@Autowired
	private NoticeRepository noticeRepository;
	
	
	public List<Notice> findAll() {
		return noticeRepository.findAllDesc();
	}
	
	public Notice insertNotice(Notice notice) {
		return noticeRepository.save(notice);
	}
	
	public ResponseEntity<Notice> detailNotice(Long notice_id) {
		Notice notice = noticeRepository.findById(notice_id).orElse(null);
		if (notice != null) {
	        notice.setViewCount(notice.getViewCount()); // 조회수 증가
	        noticeRepository.save(notice); // 변경된 조회수를 저장
	    }
		return ResponseEntity.ok(notice);
	}
	
	public ResponseEntity<Notice> updateNotice(Long notice_id, Notice notice) {

		Notice findNotice = noticeRepository.findById(notice_id).orElse(null);
		
		findNotice.setTitle(notice.getTitle());
        findNotice.setContent(notice.getContent());
        // 변경된 필드들을 저장
        noticeRepository.save(findNotice);
		return ResponseEntity.ok(findNotice);
	}

	public ResponseEntity<Map<String, Boolean>> deleteNotice(Long notice_id) {
		noticeRepository.deleteById(notice_id);
		return ResponseEntity.ok().build();
	}
	
}