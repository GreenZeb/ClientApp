import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients: any[] = [];

  constructor(private patientService: PatientService) { }

  ngOnInit() {
    this.patientService.getAllPatients().subscribe(
      (data: any[]) => {
        this.patients = data;
      },
      (error: any) => {
        console.error('Error retrieving patients:', error);
      }
    );
  }
}