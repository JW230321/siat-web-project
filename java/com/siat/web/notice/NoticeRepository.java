package com.siat.web.notice;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface NoticeRepository extends JpaRepository<Notice, Long>{

	@Query("SELECT p FROM Notice p ORDER BY p.notice_id DESC")
    List<Notice> findAllDesc();
}
