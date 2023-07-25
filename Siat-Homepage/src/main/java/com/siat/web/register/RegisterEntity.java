package com.siat.web.register;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
@Entity
@Table(name = "register")
public class RegisterEntity {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long register_id;
	@NotNull
	private String name;
	@NotNull
	private String birth;
	@NotNull
	private String address;
	@NotNull
	private String p_number;
	
	private String created_date;
	private String job;
}
