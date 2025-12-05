package com.soydz.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;

@Entity
public class Ciudad {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private  Long id;
    private @NotNull String ciudad;
    private @NotNull String pais;

    @OneToOne
    @JoinColumn(name = "clima_id")
    private Clima clima;

    public Ciudad() {
    }

    public Ciudad(String ciudad, String pais, Clima clima) {
        this.ciudad = ciudad;
        this.pais = pais;
        this.clima = clima;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public @NotNull String getCiudad() {
        return ciudad;
    }

    public void setNombre(@NotNull String ciudad) {
        this.ciudad = ciudad;
    }

    public @NotNull String getPais() {
        return pais;
    }

    public void setPais(@NotNull String pais) {
        this.pais = pais;
    }

    public Clima getClima() {
        return clima;
    }

    public void setClima(Clima clima) {
        this.clima = clima;
    }

    @Override
    public String toString() {
        return "Ciudad{" +
                "id=" + id +
                ", ciudad='" + ciudad + '\'' +
                ", pais='" + pais + '\'' +
                ", clima=" + clima +
                '}';
    }
}
