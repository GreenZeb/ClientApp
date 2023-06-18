import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private baseUrl = 'https://localhost:7165/api/Api/api/patients';

  constructor(private http: HttpClient) { }

  getDoctorPatients(doctorId: number): Observable<any[]> {
    const url = `${this.baseUrl}?doctorId=${doctorId}`;
    return this.http.get<any[]>(url);
  }

  getAllPatients(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl);
  }

  addPatient(patient: any): Observable<any> {
    return this.http.post<any>(this.baseUrl, patient);
  }
}