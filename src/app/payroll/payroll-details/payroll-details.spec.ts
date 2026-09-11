import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PayrollDetails } from './payroll-details';

describe('PayrollDetails', () => {
  let component: PayrollDetails;
  let fixture: ComponentFixture<PayrollDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayrollDetails],
    }).compileComponents();

    fixture = TestBed.createComponent(PayrollDetails);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
