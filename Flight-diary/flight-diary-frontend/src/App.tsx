import { Flight } from "./types";
import { useState, useEffect } from 'react';
import flightDiaryService from "./services/flightDiaryService";
import Flights from "./components/Flights";
import axios from "axios";

function App() {

  const [flights, setFlights] = useState<Flight[]>([]);
  const [date, setDate] = useState("");
  const [weather, setWeather] = useState("");
  const [visibility, setVisibility] = useState("");
  const [comment, setComment] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const getData = async() => {
      const data = await flightDiaryService.getAll();
      setFlights(data)
    }
    getData();
  }, [])

  const handleSubmit = async(event: React.SyntheticEvent) =>{
    event.preventDefault();
    try {
      const flight = {
        date: date,
        weather: weather,
        visibility: visibility,
        comment: comment
      };
      setErrorMessage("");
      const response = await flightDiaryService.addFlight(flight);
      setFlights(flights.concat(response));
    } catch(error) {
      if (axios.isAxiosError(error)) {
        console.log(error.status);
        setErrorMessage(error.response?.data);
      } else {
        console.error(error);
      }
    }
  }

  const handleRadioButtonsWeather = (event: React.ChangeEvent<HTMLInputElement>) => {
    setWeather(event.target.value)
  }

  const handleRadioButtonsVisibility = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVisibility(event.target.value)
  }

  const handleDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDate(event.target.value)
  }

  return (
    <div>
      {errorMessage.length > 0 && errorMessage}
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Date</h2>
          <input type="date" id="date" value={date || ''} min="2000-01-01" max="2025-01-01" onChange={handleDate}/>
        </div>
        <div>
          <h2>Weather</h2>
          <input name="windy" value='windy' checked={weather === 'windy'} type="radio" onChange={handleRadioButtonsWeather}/><label htmlFor="windy">Windy</label>
          <input name="stormy" value='stormy' checked={weather === 'stormy'} onChange={handleRadioButtonsWeather} type="radio"/><label htmlFor="stormy">Stormy</label>
          <input name="cloudy" value='cloudy' checked={weather === 'cloudy'} onChange={handleRadioButtonsWeather} type="radio"/><label htmlFor="cloudy">Cloudy</label>
          <input name="rainy" value='rainy' checked={weather === 'rainy'} onChange={handleRadioButtonsWeather} type="radio"/><label htmlFor="rainy">Rainy</label>
          <input name="sunny" value='sunny' checked={weather === 'sunny'} onChange={handleRadioButtonsWeather} type="radio"/><label htmlFor="sunny">Sunny</label>
        </div>
        <div>
          <h2>Visibility</h2>
          <input name="poor" value='poor' checked={visibility === 'poor'} type="radio" onChange={handleRadioButtonsVisibility}/><label htmlFor="poor">Poor</label>
          <input name="ok" value='ok' checked={visibility === 'ok'} type="radio" onChange={handleRadioButtonsVisibility}/><label htmlFor="ok">Ok</label>
          <input name="good" value='good' checked={visibility === 'good'} type="radio" onChange={handleRadioButtonsVisibility}/><label htmlFor="good">Good</label>
          <input name="great" value='great' checked={visibility === 'great'} type="radio" onChange={handleRadioButtonsVisibility}/><label htmlFor="great">Great</label>
        </div>
            comment <input value={comment} onChange={(e) => setComment(e.target.value)}/>
            <button type='submit'>Add</button>
        </form>
      <Flights flights={flights}/>
    </div>
  )
}

export default App
