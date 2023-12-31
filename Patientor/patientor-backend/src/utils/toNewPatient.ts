import { newPatient, Gender } from "../types"

const isString = (text: unknown): text is string => {
    return typeof text === 'string' || text instanceof String;
}

const parseValue = (value: unknown): string => {
    if(!value || !isString(value)) {
        throw new Error('Incorrect or missing value');
    }
    return value;
}

const isGender = (param: string): param is Gender => {
    return Object.values(Gender).map(g => g.toString()).includes(param)
}

const parseGender = (gender: unknown): Gender => {
    if(!isString(gender) || !isGender(gender)) {
        throw new Error('Incorrect or missing gender: ' + gender)
    }
    return gender
} 

const toNewPatientRecord = (object: unknown): newPatient  => {
    if(!object || typeof object !== 'object') {
        throw new Error('Incorrect or missing data');
    }
    
    if('name' in object && 'dateOfBirth' in object && 'ssn' in object && 'gender' in object && 'occupation' in object) 
    {
        const newPatientRecord: newPatient = {
            name: parseValue(object.name),
            dateOfBirth: parseValue(object.dateOfBirth),
            ssn: parseValue(object.ssn),
            gender: parseGender(object.gender),
            occupation: parseValue(object.occupation),
            entries: []
        };

        return newPatientRecord;
    }

    throw new Error('Incorrect data: some fields are missing');
}

export default toNewPatientRecord