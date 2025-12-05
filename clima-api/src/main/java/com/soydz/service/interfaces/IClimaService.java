package com.soydz.service.interfaces;

import com.soydz.entity.Clima;

public interface IClimaService {

    Clima guardar(String temperatura, String estado);
}
