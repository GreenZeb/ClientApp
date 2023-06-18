import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorPatientComponent } from './doctor-patient.component';

describe('DoctorPatientComponent', () => {
  let component: DoctorPatientComponent;
  let fixture: ComponentFixture<DoctorPatientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoctorPatientComponent]
    });
    fixture = TestBed.createComponent(DoctorPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});