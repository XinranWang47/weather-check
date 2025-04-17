import { useState } from 'react'
import './App.css'

interface WeatherData {
  name:string,
  main:{
    temp:number,
    humidity:number,
    feels_like:number
  },
  weather:{
    main:string,
    description:string
  }[],
  wind:{
    speed:number
  }
}

function App() {
  const [city,setCity] = useState<string>('')
  const [weatherData,setWeatherData] = useState<WeatherData | null>(null)
  const [isLoading,setIsLoading] = useState<boolean>(false)
  const [error,setError] = useState<string | null>(null)

  async function getWeather(){
    if (city.trim() !== ''){
      setIsLoading(true)
      setError(null)
      setWeatherData(null)

      try{
        const result = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ea2c189c49928a6881e425086f1b94fd&units=metric`)
        
        if(!result.ok){
          throw new Error('City not found!')
        }

        const data = await result.json()
        setWeatherData(data)
      }catch(err: any){
        setError(err.message || 'Something went wrong')
      }finally{
        setIsLoading(false)
      }
    }
  }

  return <div className='weather-app'>
    <div className='weather-get-box'>
      <input placeholder='Enter a city' value={city} onChange={(e)=>setCity(e.target.value)}/>
      <button onClick={getWeather}>Search</button>
    </div>

      {isLoading && <p>Loading...Please wait...</p>}
      {error && <p style={{color:'red',fontSize:'30px'}}>{error}</p>}
      {weatherData && (
        <div className='weather-show-area'>
        <span style={{fontSize:'45px',marginTop:'50px'}}>{weatherData.name}</span>
        <span style={{fontSize:'60px'}}>{weatherData.main.temp.toFixed(0)}°C</span>
        <span style={{fontSize:'30px'}}>{weatherData.weather[0].main}</span>
        <span style={{fontSize:'20px'}}>{weatherData.weather[0].description}</span>
        <span style={{marginTop:'70px'}}>humidity:{weatherData.main.humidity}%</span>
        <span>wind speed: {weatherData.wind.speed}</span>
        <span>feels like: {weatherData.main.feels_like.toFixed(1)}°C</span>
        </div> 
      )}
  </div>
}

export default App