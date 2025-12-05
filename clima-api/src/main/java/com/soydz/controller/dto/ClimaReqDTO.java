package com.soydz.controller.dto;

public record ClimaReqDTO(
        String ciudad,
        String pais,
        String temperatura,
        String estado
) {
}
