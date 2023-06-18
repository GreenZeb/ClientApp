import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { DoctorPatientsComponent } from './doctor-patient/doctor-patient.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'doctor-patients', component: DoctorPatientsComponent },
  { path: 'patient-list', component: PatientListComponent },
  { path: 'patient-registration', component: PatientRegistrationComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }