package com.siat.web.notice;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface NoticeRepository extends JpaRepository<Notice, Long>{

	@Modifying
	@Query("UPDATE Notice b SET b.count = b.count +1 WHERE b.notice_id = :notice_id")
	void increaseCount(@Param("notice_id") Long notice_id);
	
	@Query("SELECT p FROM Notice p ORDER BY p.notice_id DESC")
    List<Notice> findAllDesc();
}
