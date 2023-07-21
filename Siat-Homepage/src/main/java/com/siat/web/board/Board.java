package com.siat.web.board;

import java.time.LocalDateTime;
import java.util.List;

import com.siat.web.comment.Comment;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
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
	
	@OneToMany(mappedBy = "board", cascade = CascadeType.REMOVE)
	private List<Comment> commentList;
}
