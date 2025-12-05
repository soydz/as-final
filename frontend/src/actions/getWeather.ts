import { weatherApi } from "@/api/weather.api";
import type { WeatherRequest } from "@/interfaces/weather.interface";




export const getAllWeather = async() => {

    
    try {

        const {data} = await weatherApi.get('/all');
        if(!(Array.isArray(data) && data.every(item => typeof item === "object"))) {
            return {
                data: [],
                message: "api fuera de servicio"
            }
        }
        
        return {
            data,
            message: "se encontraron las siguientes ciudades con sus climas",
            ok: true
        }
    } catch (error){
        console.log("error");
        return {
            message: "Error en la busqueda de climas",
            ok: false,
            data: []
        }
    }

}