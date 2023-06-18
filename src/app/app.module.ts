import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PatientRegistrationComponent } from './patient-registration/patient-registration.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { DoctorPatientsComponent } from './doctor-patient/doctor-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientRegistrationComponent,
    PatientListComponent,
    DoctorPatientsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }