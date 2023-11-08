import axios from "axios";
import { Patient, PatientFormValues, Diagnosis } from "../types";

import { apiBaseUrl } from "../constants";

const getAll = async () => {
  const { data } = await axios.get<Patient[]>(
    `${apiBaseUrl}/patients`
  );

  return data;
};

const create = async (object: PatientFormValues) => {
  const { data } = await axios.post<Patient>(
    `${apiBaseUrl}/patients`,
    object
  );

  return data;
};

const getOne = async (id: string) => {
  const response = await axios.get<Patient>(
    `${apiBaseUrl}/patients/${id}`
  );
  return response;
};

const getDiagnosis = async () => {
  const response = await axios.get<Diagnosis>(
    `${apiBaseUrl}/diagnosis`
  );
  return response;
};

export default {
  getAll, create, getOne, getDiagnosis
};

