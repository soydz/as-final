package com.soydz.service.interfaces;

import com.soydz.controller.dto.ClimaReqDTO;
import com.soydz.controller.dto.ClimaResDTO;

import java.util.List;

public interface ICiudadService {

    ClimaResDTO guardar(ClimaReqDTO climaReqDTO);

    ClimaResDTO obtenerPorPaisCiudad(String pais, String ciudad);

    List<ClimaResDTO> obtenerTodos();
}
