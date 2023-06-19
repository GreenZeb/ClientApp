import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiUrl = 'https://localhost:7165/api/patients';

  constructor(private http: HttpClient) { }

  addPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(`${this.apiUrl}`, patient);
  }

  getAllPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.apiUrl}`);
  }

  getDoctorPatients(doctorId: number): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.apiUrl}/doctors/${doctorId}/patients`);
  }
}
