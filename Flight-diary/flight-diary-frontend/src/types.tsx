
export interface Flight {
    id: number;
    date: string;
    weather: string;
    visibility: string;
    comment: string;
}

export interface FlightsType {
    flights: Flight[]
}


export type newFlight = Omit<Flight, 'id'>