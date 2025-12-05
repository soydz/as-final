package com.soydz.repository;

import com.soydz.entity.Ciudad;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ICiudadRepository extends JpaRepository<Ciudad, Long> {

    Ciudad findByCiudadAndPais(String ciudad, String pais);
}
