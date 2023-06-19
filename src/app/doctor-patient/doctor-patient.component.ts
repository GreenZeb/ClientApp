import { Component } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-doctor-patient',
  templateUrl: './doctor-patient.component.html',
  styleUrls: ['./doctor-patient.component.css']
})
export class DoctorPatientsComponent {
  doctorId: number = 1;
  doctorPatients: any[] = [];

  constructor(private patientService: PatientService) { }

  getDoctorPatients() {
    this.patientService.getDoctorPatients(this.doctorId).subscribe(
      (data: any[]) => {
        this.doctorPatients = data;
      },
      (error: any) => {
        console.error('Error retrieving doctor\'s patients:', error);
      }
    );
  }
}