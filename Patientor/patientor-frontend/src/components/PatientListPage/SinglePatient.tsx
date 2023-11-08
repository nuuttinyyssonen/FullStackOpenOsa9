import patients from "../../services/patients";
import {useState, useEffect} from 'react';
import { Patient, Entry, Diagnosis } from "../../types";
import { useParams } from "react-router-dom";

const SinglePatient = () => {

    const id = useParams().id;
    const [patient, setPatient] = useState<Patient>();
    const [entries, setEntries] = useState<Entry[]>();
    const [diagnosis, setDiagnosis] = useState<Diagnosis[]>();

    useEffect(() => {
        const getPatientData = async() => {
            if(!id) {
                throw new Error('No Id Found!');
            }
            const data = await patients.getOne(id);
            const diagnosis = await patients.getDiagnosis();
            const entriesData = data.data.entries;
            const diagnosisCodes = entriesData.map(diagnosis => diagnosis.diagnosisCodes);
            const allDiagnosis = diagnosis.data;
            const diagnosisCodeFlatten = diagnosisCodes.flat(1);
            const temp = [];
            if(Array.isArray(allDiagnosis)) {
                for(let i = 0; i < allDiagnosis.length; i++) {
                    if(diagnosisCodeFlatten.includes(allDiagnosis[i].code)) {
                        temp.push(allDiagnosis[i]);
                    }
                }
            } 
            setDiagnosis(temp);
            setEntries(entriesData);
            setPatient(data.data);
        };
        getPatientData();
    }, [id]);

    const entryMap = entries?.map((entry, key) => {

        return(
            <div key={key}>
                <p>{entry.date} {entry.description}</p>
                <ul>
                    {diagnosis?.map((diagnosis, key) => (
                        <li key={key}>{diagnosis.code} {diagnosis.name}</li>
                    ))}
                </ul>
            </div>
        );
        
    });

    return(
        <div>
            <h1>{patient?.name}</h1>
            <p>ssn: {patient?.ssn}</p>
            <p>occupation: {patient?.occupation}</p>
            <p>gender: {patient?.gender}</p>
            <h2>Entries</h2>
            {entryMap}
        </div>
    );
};

export default SinglePatient;