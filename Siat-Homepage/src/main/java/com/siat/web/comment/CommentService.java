package com.siat.web.comment;

import com.siat.web.board.Board;
import com.siat.web.board.BoardRepository;
import com.siat.web.board.ResourceNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class CommentService {

    @Autowired
    private CommentRepository commentRepository;

    @Autowired
    private BoardRepository boardRepository;

    // 모든 댓글 조회
    public List<Comment> getAllComments() {
        return commentRepository.findAll();
    }

    // 게시글에 대한 댓글 조회
    public List<Comment> getCommentsByBoardId(Long board_id) {
        Board board = boardRepository.findById(board_id).orElseThrow(() -> new ResourceNotFoundException("Not exist Board Data by no : [" + board_id + "]"));
        return board.getCommentList();
    }

    // 댓글 추가
    public Comment createComment(Comment comment) {
        comment.setCreateDate(LocalDateTime.now());
        return commentRepository.save(comment);
    }

    // 댓글 수정
    public ResponseEntity<Comment> updateComment(Long comment_id, Comment updateComment) {
        Comment comment = commentRepository.findById(comment_id).orElseThrow(() -> new ResourceNotFoundException("Not exist Comment Data by no : [" + comment_id + "]"));
        comment.setContent(updateComment.getContent());
        comment.setUpdateDate(LocalDateTime.now());

        Comment updatedComment = commentRepository.save(comment);
        return ResponseEntity.ok(updatedComment);
    }

    // 댓글 삭제
    public void deleteComment(Long comment_id) {
        commentRepository.deleteById(comment_id);
    }
}
