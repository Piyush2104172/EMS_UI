import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PayrollSummary } from './payroll-summary';

describe('PayrollSummary', () => {
  let component: PayrollSummary;
  let fixture: ComponentFixture<PayrollSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayrollSummary],
    }).compileComponents();

    fixture = TestBed.createComponent(PayrollSummary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
