package com.siat.web.file;


import com.fasterxml.jackson.annotation.JsonBackReference;
import com.siat.web.board.Board;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import lombok.Data;

@Entity
@Data
public class UploadFile {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long uploadfile_id;
	@Column(unique = true)
	private String originName;
	private String storedName;
	 
	private String fileType;
	
	@JsonBackReference
    @ManyToOne(cascade = CascadeType.PERSIST) // 또는 CascadeType.ALL
    @JoinColumn(name = "board_id")
    private Board board;
	
}
