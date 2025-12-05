package com.soydz.repository;

import com.soydz.entity.Clima;
import org.springframework.data.jpa.repository.JpaRepository;

public interface IClimaRepository extends JpaRepository<Clima, Long> {
}
