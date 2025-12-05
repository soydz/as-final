import { weatherApi } from "@/api/weather.api";
import type { WeatherRequest, WeatherResponse } from "@/interfaces/weather.interface";




export const getWeatherByCity = async(ciudad: string, pais: string) => {

    
    try {

        const {data} = await weatherApi.get<WeatherResponse>(`${pais}/${ciudad}`);

        if(!(typeof data === "object")) {
            return {
                data: [],
                message: "api fuera de servicio"
            }
        }

        return {
            data:[data],
            message: "se encontraró con éxito la ciudad y su clima",
            ok: true
        }
    } catch (error){
        console.log("error");
        return {
            message: "Error en la busqueda del clima y la ciudad",
            ok: false,
            data: []
        }
    }

}