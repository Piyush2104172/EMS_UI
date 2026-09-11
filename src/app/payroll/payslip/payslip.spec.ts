import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Payslip } from './payslip';

describe('Payslip', () => {
  let component: Payslip;
  let fixture: ComponentFixture<Payslip>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Payslip],
    }).compileComponents();

    fixture = TestBed.createComponent(Payslip);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
