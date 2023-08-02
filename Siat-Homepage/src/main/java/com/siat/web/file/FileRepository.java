package com.siat.web.file;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories
@Repository
public interface FileRepository extends JpaRepository<UploadFile, Long> {
	UploadFile findByOriginName(String originName);

    List<UploadFile> findByFileType(String fileType);
    
    List<UploadFile> findAllByOriginName(String originName);
}
