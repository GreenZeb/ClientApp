import { Component } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-registration',
  templateUrl: './patient-registration.component.html',
  styleUrls: ['./patient-registration.component.css']
})
export class PatientRegistrationComponent {
  patient: any = {};
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private patientService: PatientService) { }

  onSubmit() {
    this.patientService.addPatient(this.patient).subscribe(
      (response: any) => {
        this.successMessage = 'Patient added successfully';
        this.errorMessage = ''; // Reset error message
        console.log('Patient added successfully:', response);
      },
      (error: any) => {
        this.errorMessage = 'Error adding patient: ' + error.message;
        this.successMessage = ''; // Reset success message
        console.error('Error adding patient:', error);
      }
    );
  }
}