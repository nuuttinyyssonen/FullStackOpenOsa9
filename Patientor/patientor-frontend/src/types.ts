export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
}

export enum Gender {
  Male = "male",
  Female = "female",
  Other = "other"
}

export interface Patient {
  id: string;
  name: string;
  occupation: string;
  gender: Gender;
  ssn?: string;
  dateOfBirth?: string;
  entries: Entry[];
}

export interface Diagnosis {
  code: string;
  name: string;
  latin?: string;
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

export type Entry = BaseEntry | HospitalEntry | OccupationalHealthcareEntry;
export type PatientFormValues = Omit<Patient, "id" | "entries">;