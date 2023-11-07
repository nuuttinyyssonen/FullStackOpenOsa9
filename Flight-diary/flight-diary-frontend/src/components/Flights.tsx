import { FlightsType } from "../types"

const Flights = ({flights}: FlightsType) => {

    const flightsMap = flights.map((flight, key) => {
        return (
          <div key={key}>
            <h3>date: {flight.date}</h3>
            <p>weather: {flight.weather}</p>
            <p>visibility: {flight.visibility}</p>
          </div>
        )
      })

    return (
        <div>
            <h2>Diary Entries</h2>
            {flightsMap}
        </div>
    )
}

export default Flights