import axios from 'axios';
import { Flight, newFlight } from '../types';

const baseUrl = 'http://localhost:3000/api/diaries';

const getAll = async() => {
    const response = await axios.get<Flight[]>(baseUrl);
    return response.data
}

const addFlight = async(flight: newFlight) => {
    const response = await axios.post<Flight>(baseUrl, flight)
    return response.data
}

export default {
    getAll,
    addFlight
}