package com.siat.web.notice;



import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional 
public class NoticeService {

	@Autowired
	private NoticeRepository noticeRepository;
	
	public List<Notice> noticeList(){
		
		return noticeRepository.findAllDesc();
	}
	
	
	public void insertNotice(Notice notice) {
		noticeRepository.save(notice);
	}
	public Notice detailNotice(Notice notice) {
		return noticeRepository.findById(notice.getNotice_id()).get();
	}
	public void updateNotice(Notice notice) {
		Notice findNotice = noticeRepository.findById(notice.getNotice_id()).orElse(null);
	    if (findNotice != null) {
	        findNotice.setTitle(notice.getTitle());
	        findNotice.setContent(notice.getContent());

	        // 변경된 필드들을 저장
	        noticeRepository.save(findNotice);
	    }
	}
	public void deleteNotice(Notice notice) {
		noticeRepository.deleteById(notice.getNotice_id());
		
	}

	public void increaseCount(Long getNotice_id) {
		noticeRepository.increaseCount(getNotice_id);
	}

	public Notice getNoticeByNotice(Long getNotice_id) {
		return noticeRepository.findById(getNotice_id).orElse(null);
	}



}