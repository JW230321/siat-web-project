package com.siat.web.notice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;



@Controller
public class NoticeController {

	@Autowired
	private NoticeService noticeService;
	
	@GetMapping("/noticeList")
	public String NoticeList(Model model) {
	    
		List<Notice> noticeList = noticeService.noticeList();
		
	    model.addAttribute("noticeList", noticeList);

	    return "noticeList";
	}
	

	@GetMapping("/insertNotice")
	public String insertNoticeView() {
		
		return "insertNotice";
	}
	
	@PostMapping("/insertNotice")
	public String insertNotice(@ModelAttribute("notice") Notice notice) {
		
		noticeService.insertNotice(notice);
		return "redirect:noticeList";
	}
	
	@GetMapping("/detailNotice")
	public String detailNoticeView( Notice notice, Model model) {

	    // 게시글 조회
		Notice retrievedNotice = noticeService.detailNotice(notice);

	    // 조회수 증가
		noticeService.increaseCount(notice.getNotice_id());

	    model.addAttribute("notice", retrievedNotice);
	    return "detailNotice";
	}
//	
//	
	@GetMapping("/modifyNotice")
	public String modifyNoticeView(@RequestParam(name = "notice_id", required = false) Long notice_id, Model model) {

	    Notice notice = noticeService.getNoticeByNotice(notice_id);
	    model.addAttribute("notice", notice);
	    return "modifyNotice";
	}
	
	@PostMapping("/modifyNotice")
	public String updateNotice(@ModelAttribute("notice") Notice notice) {
		noticeService.updateNotice(notice);
		return "redirect:/noticeList";
	}
//	
	@GetMapping("/deleteNotice")
	public String deleteNoticeView( Notice notice) {

		noticeService.deleteNotice(notice);
	    return "forward:/noticeList";
	}
	
	
	
}