package com.soydz.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.validation.constraints.NotNull;

@Entity
public class Clima {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private @NotNull String temperatura;
    private String estado;

    public Clima() {
    }

    public Clima(String temperatura, String estado) {
        this.temperatura = temperatura;
        this.estado = estado;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public @NotNull String getTemperatura() {
        return temperatura;
    }

    public void setTemperatura(@NotNull String temperatura) {
        this.temperatura = temperatura;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }


    @Override
    public String toString() {
        return "Clima{" +
                "id=" + id +
                ", temperatura='" + temperatura + '\'' +
                ", estado='" + estado + '\'' +
                '}';
    }
}
