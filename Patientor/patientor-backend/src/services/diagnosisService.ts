import { Diagnosis } from '../types';
import data from '../../data/diagnosisData';

const getEntries = (): Diagnosis[] => {
    return data;
}

export default {
    getEntries
}