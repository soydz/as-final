

export interface WeatherResponse {
    id: number;
    pais: string;
    ciudad: string;
    temperatura: string;
    estado: string;
}


export interface WeatherRequest {
    pais: string;
    ciudad: string;
    temperatura: string;
    estado: string;
}
