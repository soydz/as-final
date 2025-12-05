package com.soydz.controller.dto;

import com.soydz.entity.Ciudad;

public record ClimaResDTO(
        Long id,
        String ciudad,
        String pais,
        String temperatura,
        String estado
) {

    public static ClimaResDTO deEntity(Ciudad ciudad) {
        return new ClimaResDTO(
                ciudad.getId(),
                ciudad.getCiudad(),
                ciudad.getPais(),
                ciudad.getClima().getTemperatura(),
                ciudad.getClima().getEstado()
        );
    }
}
