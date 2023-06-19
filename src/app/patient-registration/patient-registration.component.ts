import { Component } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent {
  patient: any = {};

  constructor(private patientService: PatientService) { }

  onSubmit() {
    this.patientService.addPatient(this.patient).subscribe(
      (response: any) => {
        console.log('Patient added successfully:', response);
      },
      (error: any) => {
        console.error('Error adding patient:', error);
      }
    );
  }
}
