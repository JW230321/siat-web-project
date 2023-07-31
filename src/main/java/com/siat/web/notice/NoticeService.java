package com.siat.web.notice;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;

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

	public List<Notice> getSearchNotice(String kw, String searchOption) {
		Specification<Notice> spec = search(kw, searchOption);

		Sort sortByCreateTimeDesc = Sort.by(Sort.Direction.DESC, "createTime");
		return noticeRepository.findAll(spec, sortByCreateTimeDesc);
	}

	// 검색 기능
	private Specification<Notice> search(String kw, String searchOption) {
		return new Specification<Notice>() {
			private static final long serialVersionUID = 1L;

			@Override
			public Predicate toPredicate(Root<Notice> q, CriteriaQuery<?> query, CriteriaBuilder cb) {
				query.distinct(true); // 중복을 제거

				if ("title".equals(searchOption)) {
					return cb.like(q.get("title"), "%" + kw + "%");
				} else if ("content".equals(searchOption)) {
					return cb.like(q.get("content"), "%" + kw + "%");
				}

				// 기본적으로 제목과 내용 모두 검색
				return cb.or(cb.like(q.get("title"), "%" + kw + "%"), cb.like(q.get("content"), "%" + kw + "%"));
			}
		};
	}

}