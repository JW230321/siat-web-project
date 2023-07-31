package com.siat.web.board;

import java.time.LocalDateTime;
import java.util.List;

import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.siat.web.comment.Comment;
import com.siat.web.member.Member;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OrderBy;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Entity
public class Board {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long board_id;
	
	private String title;
	
	@Column(columnDefinition = "TEXT")
	private String content;
	
	private LocalDateTime createTime;
	
	private LocalDateTime updateTime;
	
	private Integer count;
	
	@PrePersist
	public void onCreate() {
		createTime = LocalDateTime.now();
	}
	
	@PreUpdate
	public void onUpdate() {
		updateTime = LocalDateTime.now();
	}
	
	@ManyToOne
    @JoinColumn(name = "member_id")
    private Member author;
	
	@JsonManagedReference
	@OneToMany(mappedBy = "board" , fetch = FetchType.EAGER, cascade = CascadeType.REMOVE)
	@OrderBy("id asc") // 댓글 정렬
	private List<Comment> comments;
	
	
}
