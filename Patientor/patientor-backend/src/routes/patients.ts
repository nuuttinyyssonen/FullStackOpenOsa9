import express from 'express';
import patientsService from '../services/patientsService';
import toNewPatientRecord from '../utils/toNewPatient';

const router = express.Router();

router.get('/', (_req, res) => {
    const data = patientsService.getNonSensitiveEntries()
    res.send(data)
})

router.post('/', (req, res) => {
    try {
        const newPatientRecord = toNewPatientRecord(req.body)
        const addedPatient = patientsService.addPatient(newPatientRecord)
        res.json(addedPatient)
    } catch(error: unknown) {
        let errorMessage = 'Somehting went wrong';
        if(error instanceof Error) {
            errorMessage += 'Error ' + error.message
        }
        res.status(400).send(errorMessage)
    }
})

export default router