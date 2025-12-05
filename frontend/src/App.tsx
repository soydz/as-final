import { useState, type FormEvent } from 'react'

import './App.css'
import { CloudRain, Plus, Search } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Label } from './components/ui/label'
import { Input } from './components/ui/input'
import { Button } from './components/ui/button'

import { createWeather } from './actions/create'
import { getAllWeather } from './actions/getWeather'
import type {  WeatherResponse } from './interfaces/weather.interface'
import { getWeatherByCity } from './actions/getByCity'



// const weatherData = [
//   {
//     id: 1,
//     pais: "colombia",
//     ciudad: "medellín",
//     estado:"Soleado",
//     temperatura: 25,
//   }
// ]

// metodo post
  // se manda pais y ciudad


function App() {


  const [weatherData, setWeatherData] = useState<WeatherResponse[]>([])
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [climate, setClimate] = useState("");
  const [temperature, setTemperature] = useState("")
  const [isLoading, setIsLoading] = useState(false);
  const [searchCity, setSearchCity] = useState("");
  const [searchCountry, setSearchCountry] = useState("");

  const [message, setMessage] = useState("")


  

  const handleCreateCity = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const createClimate = {
      pais: country,
      ciudad: city,
      estado: climate,
      temperatura: temperature
    }

    setCountry("");
    setCity("");
    setTemperature("");
    setClimate("");
    const { message } = await createWeather(createClimate)
    if(message){
      setMessage(message)
    }


  }


  const handleGetAllWeather = async() => {
    const { message, data  } = await getAllWeather();
    setMessage(message)

    
    setWeatherData(data)
    
  }

  const handleSearchWeather = async(e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const { data, message } = await getWeatherByCity(searchCity, searchCountry);
    setMessage( message );
    setWeatherData(data);


    setSearchCity("");
    setSearchCountry("");

    
  }
  

  return (
     <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 dark:from-slate-950 dark:to-slate-900 p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <CloudRain className="h-10 w-10 text-blue-600 dark:text-blue-400" />
            <h1 className="font-bold text-4xl text-balance">Gestor de Climas</h1>
          </div>
          <p className="text-muted-foreground text-pretty">
            Crea y consulta información del clima de ciudades alrededor del mundo
          </p>
        </div>

        <Tabs defaultValue="create" className="w-full">
          <TabsList className="mb-6 grid w-full grid-cols-2">
            <TabsTrigger value="create">Crear Ciudad</TabsTrigger>
            <TabsTrigger value="search">Consultar Climas</TabsTrigger>
          </TabsList>

          <TabsContent value="create">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Plus className="h-5 w-5" />
                  Agregar Nueva Ciudad
                </CardTitle>
                <CardDescription>Ingresa los datos del país, ciudad y su clima actual</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleCreateCity} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="country">País</Label>
                    <Input
                      id="country"
                      placeholder="Ej: España"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">Ciudad</Label>
                    <Input
                      id="city"
                      placeholder="Ej: Madrid"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="climate">Clima</Label>
                    <Input
                      id="climate"
                      placeholder="Ej: Soleado"
                      value={climate}
                      onChange={(e) => setClimate(e.target.value)}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="climate">Temperatura</Label>
                    <Input
                      id="temperature"
                      placeholder="Ej: 25°C"
                      value={temperature}
                      onChange={(e) => setTemperature(e.target.value)}
                      required
                    />
                  </div>
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? "Guardando..." : "Crear Ciudad"}
                  </Button>
                </form>
                {message && <div className="mt-4 rounded-md bg-muted p-3 text-center text-sm">{message}</div>}
              </CardContent>
            </Card>
          </TabsContent>


           <TabsContent value="search">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="h-5 w-5" />
                    Buscar Clima
                  </CardTitle>
                  <CardDescription>Consulta todos los climas o busca por ciudad y país específico</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    onClick={handleGetAllWeather}
                    disabled={isLoading}
                    variant="outline"
                    className="w-full bg-transparent"
                  >
                    {isLoading ? "Buscando..." : "Consultar Todos los Climas"}
                  </Button>

                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t" />
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-card px-2 text-muted-foreground">o buscar específico</span>
                    </div>
                  </div>

                  <form onSubmit={handleSearchWeather} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="search-city">Ciudad</Label>
                      <Input
                        id="search-city"
                        placeholder="Nombre de la ciudad"
                        value={searchCity}
                        onChange={(e) => setSearchCity(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="search-country">País</Label>
                      <Input
                        id="search-country"
                        placeholder="Nombre del país"
                        value={searchCountry}
                        onChange={(e) => setSearchCountry(e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit" disabled={isLoading} className="w-full">
                      {isLoading ? "Buscando..." : "Buscar por Ciudad y País"}
                    </Button>
                  </form>

                  {message && <div className="rounded-md bg-muted p-3 text-center text-sm">{message}</div>}
                </CardContent>
              </Card>

              {weatherData.length > 0 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Resultados</CardTitle>
                    <CardDescription>
                      Se encontraron {weatherData.length} {weatherData.length === 1 ? "ciudad" : "ciudades"}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {weatherData.map((item) => (
                        <div key={item.id} className="flex items-start gap-4 rounded-lg border bg-card p-4">
                          <CloudRain className="mt-1 h-5 w-5 flex-shrink-0 text-blue-600 dark:text-blue-400" />
                          <div className="flex-1">
                            <h3 className="font-semibold">
                              {item.ciudad}, {item.pais}
                            </h3>
                            <p className="text-muted-foreground text-sm">{item.estado}, {item.temperatura}°C</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default App
