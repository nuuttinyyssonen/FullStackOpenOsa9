import express from 'express'
import { calculateBmi } from './bmiCalculator';

const app = express();

app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack')
})

app.get('/bmi/:height/:weight', (req, res) => {
    if(isNaN(Number(req.params.height)) || isNaN(Number(req.params.weight))) {
        return res.json({"error": "malfromatted parameters"})
    }
    const total = calculateBmi(Number(req.params.height), Number(req.params.weight))
    const result = {
        weight: req.params.weight,
        height: req.params.height,
        bmi: total
    }
    return res.json(result)
})

const PORT = 3003

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})