package com.siat.web.board;

import java.util.List;

import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;


@EnableJpaRepositories
@Repository
public interface BoardRepository extends JpaRepository<Board, Long> {
	List<Board> findAllByOrderByCreateTimeDesc();
	
	List<Board> findAll(Specification<Board> spec, Sort sort);
}
