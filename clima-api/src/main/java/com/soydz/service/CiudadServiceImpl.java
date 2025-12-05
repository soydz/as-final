package com.soydz.service;

import com.soydz.controller.dto.ClimaReqDTO;
import com.soydz.controller.dto.ClimaResDTO;
import com.soydz.entity.Ciudad;
import com.soydz.entity.Clima;
import com.soydz.repository.ICiudadRepository;
import com.soydz.service.interfaces.ICiudadService;
import com.soydz.service.interfaces.IClimaService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CiudadServiceImpl implements ICiudadService {

    private final ICiudadRepository ciudadRepository;
    private final IClimaService climaService;

    public CiudadServiceImpl(ICiudadRepository ciudadRepository, IClimaService climaService) {
        this.ciudadRepository = ciudadRepository;
        this.climaService = climaService;
    }


    @Override
    public ClimaResDTO guardar(ClimaReqDTO climaReqDTO) {
        Clima climaBd = climaService.guardar(climaReqDTO.temperatura(), climaReqDTO.estado());

        return ClimaResDTO.deEntity(
                ciudadRepository.save(new Ciudad(
                        climaReqDTO.ciudad().toLowerCase(),
                        climaReqDTO.pais().toLowerCase(),
                        climaBd))
        );
    }

    @Override
    public ClimaResDTO obtenerPorPaisCiudad(String pais, String ciudad) {
        Ciudad ciudadBd = ciudadRepository.findByCiudadAndPais(ciudad.toLowerCase(), pais.toLowerCase());

        if(ciudadBd == null) {
            throw  new IllegalArgumentException("la ciudad no existe");
        }

        return ClimaResDTO.deEntity(ciudadBd);
    }

    @Override
    public List<ClimaResDTO> obtenerTodos() {
        return ciudadRepository.findAll().stream().map(ClimaResDTO::deEntity).toList();
    }
}
