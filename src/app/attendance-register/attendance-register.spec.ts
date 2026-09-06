import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AttendanceRegister } from './attendance-register';

describe('AttendanceRegister', () => {
  let component: AttendanceRegister;
  let fixture: ComponentFixture<AttendanceRegister>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttendanceRegister],
    }).compileComponents();

    fixture = TestBed.createComponent(AttendanceRegister);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
