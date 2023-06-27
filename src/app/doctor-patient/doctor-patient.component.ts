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
  allPatients: any[] = [];

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.getAllPatients();
  }

  getAllPatients() {
    this.patientService.getAllPatients().subscribe(
      (data: any[]) => {
        this.allPatients = data;
      },
      (error: any) => {
        console.error('Error retrieving patients:', error);
      }
    );
  }

  getDoctorPatients() {
    this.doctorPatients = this.allPatients.filter(patient => patient.doctorId === this.doctorId);
  }
}