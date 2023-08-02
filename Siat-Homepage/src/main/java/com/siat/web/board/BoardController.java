package com.siat.web.board;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

@CrossOrigin(origins = { "http://localhost:3000", "http://localhost:3001" })
@RestController
@RequestMapping("/siat")
public class BoardController {

	@Autowired
	private BoardService boardService;

	// get all Board
	@GetMapping("/board")
	public List<Board> getAllBoards() {
		return boardService.getAllBoard();
	}
//
//	@PostMapping("/board")
//	public Board createBoard(@RequestPart("board") Board board, @RequestPart("files") List<MultipartFile> files,
//			@RequestParam Long memberId) {
//		return boardService.createBoard(board, memberId, files);
//	}
	// insert board
	@PostMapping("/board/defalut")
	public Board createBoard(@RequestBody Board board, @RequestParam Long memberId) {
	    return boardService.createNoFileBoard(board, memberId);
	}
	
	@PostMapping("/board")
	public Board createBoard(@RequestPart("board") Board board, @RequestPart("files") List<MultipartFile> files,
			@RequestParam Long memberId) {
		return boardService.createBoard(board, memberId, files);
	}

	// get one board
	@GetMapping("/board/{board_id}")
	public ResponseEntity<Board> getBoardById(@PathVariable Long board_id) {
		return boardService.getBoard(board_id);
	}

	// update board
	@PutMapping("/board/{board_id}")
	public ResponseEntity<Board> updateBoardByNo(@PathVariable Long board_id, @RequestBody Board board) {
		return boardService.updateBoard(board_id, board);
	}

	@DeleteMapping("/board/{board_id}")
	public void deleteBoardByNo(@PathVariable Long board_id) {
		boardService.deleteBoard(board_id);
	}

	// search boards data
	@GetMapping("/board/search")
	public List<Board> getSearchBoard(@RequestParam String kw) {
		return boardService.getSearchBoard(kw);
	}
}
