package com.siat.web.employment;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Entity
@Data
public class Employment {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long employment_id;
	
	@NotNull
	private String companyName;
	@NotNull
	private String companyNum;
	@NotNull
	private String companyAddr;
	@NotNull
	private String companyCall;
	@NotNull
	private String name;
	@NotNull
	private String spot;
	@NotNull
	private String type;
	@NotNull
	private String work;
}
