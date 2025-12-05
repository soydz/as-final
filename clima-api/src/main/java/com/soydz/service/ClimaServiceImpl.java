package com.soydz.service;

import com.soydz.entity.Clima;
import com.soydz.repository.IClimaRepository;
import com.soydz.service.interfaces.IClimaService;
import org.springframework.stereotype.Service;

@Service
public class ClimaServiceImpl implements IClimaService {

    private final IClimaRepository climaRepository;

    public ClimaServiceImpl(IClimaRepository climaRepository) {
        this.climaRepository = climaRepository;
    }


    @Override
    public Clima guardar(String temperatura, String estado) {
        return climaRepository.save(new Clima(temperatura, estado.toLowerCase()));
    }
}
