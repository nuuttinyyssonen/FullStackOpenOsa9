import patientData from '../../data/patientsData';
import { NonSensitivePatientEntry, Patient, newPatient } from '../types';
import { v1 as uuid } from 'uuid'
const id = uuid()

const getNonSensitiveEntries = (): NonSensitivePatientEntry[] => {
    return patientData.map(({id, name, dateOfBirth, gender, occupation}) =>({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }))
}

const addPatient = ( record: newPatient ): Patient => {
    const newPatient = {
        id: id,
        ...record
    }
    patientData.push(newPatient)
    return newPatient
}

export default {
    getNonSensitiveEntries, addPatient
}