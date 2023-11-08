export interface Diagnosis {
    code: string;
    name: string;
    latin?: string;
}

export interface HospitalEntry extends BaseEntry {
    discharge: {
        date: string;
        criteria: string;
    }
}

export interface OccupationalHealthcareEntry extends BaseEntry {
    employerName: string;
    sickLeave: {
        startDate: string;
        endDate: string
    }
}

export interface BaseEntry {
    id: string;
    date: string;
    type: string;
    specialist: string;
    diagnosisCodes?: string[]; 
    description: string;
    healthCheckRating?: number;
}


export interface Patient {
    id: string;
    name: string;
    dateOfBirth: string;
    ssn: string;
    gender: string;
    occupation: string; 
    entries: Entry[];
}

export enum Gender {
    male = 'male',
    female = 'female',
    other = 'other'
}

export type newPatient = Omit<Patient, 'id'>;

export type NonSensitivePatientEntry = Omit<Patient, 'ssn' | 'entries'>;

export type Entry = BaseEntry | HospitalEntry | OccupationalHealthcareEntry