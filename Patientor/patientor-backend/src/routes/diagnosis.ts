import express from 'express';
import diagnosisService from '../services/diagnosisService';

const router = express.Router();

router.get('/', (_req, res) => {
    const diagnosis = diagnosisService.getEntries()
    res.send(diagnosis)
})

export default router