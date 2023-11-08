import patients from '../../data/patientFullData';
import { NonSensitivePatientEntry, Patient, newPatient } from '../types';
import { v1 as uuid } from 'uuid'
const id = uuid()

const getNonSensitiveEntries = (): NonSensitivePatientEntry[] => {
    return patients.map(({id, name, dateOfBirth, gender, occupation}) =>({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }))
}

const getOneEntry = (id: string): Patient => {
    const onePatient = patients.find(p => p.id === id);
    if(!onePatient) {
        throw new Error(`Patient not found with id ${id}`);
    }
    return onePatient
}

const addPatient = ( record: newPatient ): Patient => {
    const newPatient = {
        id: id,
        ...record
    }
    patients.push(newPatient)
    return newPatient
}

export default {
    getNonSensitiveEntries, 
    addPatient,
    getOneEntry
}