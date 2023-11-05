import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';

const app = express();
app.use(express.json());

app.get('/hello', (_req, res) => {
    res.send('Hello Full Stack');
});

app.get('/bmi/', (req, res) => {
    const height = req.query.height;
    const weight = req.query.weight;
    if(isNaN(Number(height)) || isNaN(Number(weight))) {
        return res.status(400).send({"error": "malfromatted parameters"});
    }
    const total = calculateBmi(Number(height), Number(weight));
    const result = {
        weight: weight,
        height: height,
        bmi: total
    };
    return res.json(result);
});

app.post('/exercises', (req, res) => {
    const daily_exercises = req.body.daily_exercises as number[];
    const target = req.body.target as number;
    if(daily_exercises.length !== 7 || !target) {
        return res.status(400).send({"error": "parameters missing"});
    }
    for(let i = 0; i < daily_exercises.length; i++) {
        if(typeof daily_exercises[i] !== 'number' || typeof target !== 'number') {
            return res.status(400).send({"error": "malfromatted parameters"});
        }
    }
    const result = calculateExercises(target, daily_exercises);
    return res.send({ result });
});

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});