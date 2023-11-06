import express from 'express';
import patientsService from '../services/patientsService';

const router = express.Router();

router.get('/', (_req, res) => {
    const data = patientsService.getNonSensitiveEntries()
    res.send(data)
})

export default router