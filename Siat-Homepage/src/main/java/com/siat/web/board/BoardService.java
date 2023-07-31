package com.siat.web.board;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.siat.web.member.Member;
import com.siat.web.member.MemberRepository;

import jakarta.persistence.criteria.CriteriaBuilder;
import jakarta.persistence.criteria.CriteriaQuery;
import jakarta.persistence.criteria.Predicate;
import jakarta.persistence.criteria.Root;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;

@Service
public class BoardService {

	@Autowired
	private BoardRepository boardRepository;
	
	@Autowired
	private MemberRepository memberRepository;

	// get boards data
	public List<Board> getAllBoard() {
		return boardRepository.findAllByOrderByCreateTimeDesc();
	}
	
	// get search boards data
	public List<Board> getSearchBoard(String kw) {
	    Specification<Board> spec = search(kw);

	    Sort sortByCreateTimeDesc = Sort.by(Sort.Direction.DESC, "createTime");
	    return boardRepository.findAll(spec, sortByCreateTimeDesc);
	}

	// insert data into board
	public Board createBoard(Board board, Long memberId) {
		Member author = memberRepository.findById(memberId).orElse(null);
		if (author != null) {
            board.setAuthor(author); // 게시판에 작성자 정보를 설정
            return boardRepository.save(board); // 게시판 저장
        }
		// memberId에 해당하는 회원이 존재하지 않을 경우 처리
        return null;
	}

	// get one board by board_id
	public ResponseEntity<Board> getBoard(Long board_id) {
		Board board = boardRepository.findById(board_id)
				.orElseThrow(() -> new ResourceNotFoundException("Not exist Board Data by no : [" + board_id + "]"));
		return ResponseEntity.ok(board);
	}

	// update board set * where board_id
	public ResponseEntity<Board> updateBoard(Long board_id, Board updateBoard) {
		Board board = boardRepository.findById(board_id)
				.orElseThrow(() -> new ResourceNotFoundException("Not exist Board Data by no : [" + board_id + "]"));
		board.setTitle(updateBoard.getTitle());
		board.setContent(updateBoard.getContent());
		board.setUpdateTime(LocalDateTime.now());

		Board endUpdateBoard = boardRepository.save(board);
		return ResponseEntity.ok(endUpdateBoard);
	}

	public void deleteBoard(Long board_id) {
		boardRepository.deleteById(board_id);
	}

	// 검색 기능
	private Specification<Board> search(String kw) {
		return new Specification<Board>() {
			private static final long serialVersionUID = 1L;

			@Override
			public Predicate toPredicate(Root<Board> q, CriteriaQuery<?> query, CriteriaBuilder cb) {
				query.distinct(true); // 중복을 제거

				return cb.or(cb.like(q.get("title"), "%" + kw + "%"), // 제목
						cb.like(q.get("content"), "%" + kw + "%")); // 내용
			}
		};
	}

}
