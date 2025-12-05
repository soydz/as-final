import { weatherApi } from "@/api/weather.api";
import type { WeatherRequest } from "@/interfaces/weather.interface";




export const createWeather = async(newWeather: WeatherRequest) => {

    const { pais, ciudad, temperatura, estado } = newWeather
    try {

        const {data} = await weatherApi.post('/',{
            pais,
            ciudad,
            temperatura,
            estado
        });

        return {
            data,
            message: "creación exitosa",
            ok: true
        }
    } catch (error){
        console.log("error");
        return {
            message: "Error en la creación",
            ok: false
        }
    }

}