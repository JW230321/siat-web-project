package com.siat.web.comment;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/siat")
public class CommentController {
	
	@Autowired
    private CommentService commentService;

    // 댓글 조회
    @GetMapping("/comment")
    public List<Comment> getAllComments() {
        return commentService.getAllComments();
    }

    // 게시글에 대한 댓글 조회
    @GetMapping("/comment/board/{board_id}")
    public List<Comment> getCommentsByBoardId(@PathVariable Long board_id) {
        return commentService.getCommentsByBoardId(board_id);
    }

    // 댓글 추가
    @PostMapping("/comment")
    public Comment createComment(@RequestBody Comment comment) {
        return commentService.createComment(comment);
    }

    // 댓글 수정
    @PutMapping("/comment/{comment_id}")
    public ResponseEntity<Comment> updateCommentById(@PathVariable Long comment_id, @RequestBody Comment comment) {
        return commentService.updateComment(comment_id, comment);
    }

    // 댓글 삭제
    @DeleteMapping("/comment/{comment_id}")
    public void deleteCommentById(@PathVariable Long comment_id) {
        commentService.deleteComment(comment_id);
    }
}
