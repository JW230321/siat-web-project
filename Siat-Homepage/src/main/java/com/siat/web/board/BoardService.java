package com.siat.web.board;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class BoardService {

	@Autowired
	private BoardRepository boardRepository;
	
	// get boards data
	public List<Board> getAllBoard() {
		return boardRepository.findAllByOrderByCreateTimeDesc();
	}
	
	// insert data into board
	public Board createBoard(Board board) {
		return boardRepository.save(board);
	}
	
	// get one board by board_id
	public ResponseEntity<Board> getBoard(Long board_id) {
		Board board = boardRepository.findById(board_id).orElseThrow(() ->new ResourceNotFoundException("Not exist Board Data by no : ["+board_id+"]"));
		return ResponseEntity.ok(board);
	}
	
	// update board set * where board_id
	public ResponseEntity<Board> updateBoard(Long board_id, Board updateBoard) {
		Board board = boardRepository.findById(board_id).orElseThrow(() -> new ResourceNotFoundException("Not exist Board Data by no : ["+board_id+"]"));
		board.setTitle(updateBoard.getTitle());
		board.setContent(updateBoard.getContent());
		board.setUpdateTime(LocalDateTime.now());
		
		Board endUpdateBoard = boardRepository.save(board);
		return ResponseEntity.ok(endUpdateBoard);
	}
	
	public void deleteBoard(Long board_id) {
		boardRepository.deleteById(board_id);
	}
}
