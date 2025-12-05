package com.soydz.controller;

import com.soydz.controller.dto.ClimaReqDTO;
import com.soydz.controller.dto.ClimaResDTO;
import com.soydz.service.interfaces.ICiudadService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin("localhost:5173")
public class CiudadController {

    private ICiudadService ciudadService;

    public CiudadController(ICiudadService ciudadService) {
        this.ciudadService = ciudadService;
    }

    @GetMapping("/{pais}/{ciudad}")
    public ResponseEntity<?> obtenerPorNombreYPais(@PathVariable("pais") String pais, @PathVariable("ciudad") String ciudad) {
        return ResponseEntity.ok(ciudadService.obtenerPorPaisCiudad(pais, ciudad));
    }

    @GetMapping("/all")
    public ResponseEntity<List<ClimaResDTO>> obtenerTodasCiudades() {
        return ResponseEntity.ok(ciudadService.obtenerTodos());
    }

    @PostMapping("/guardar")
    public ResponseEntity<ClimaResDTO> guardar(@RequestBody ClimaReqDTO climaReqDTO) {
        return ResponseEntity.ok(ciudadService.guardar(climaReqDTO));
    }
}
