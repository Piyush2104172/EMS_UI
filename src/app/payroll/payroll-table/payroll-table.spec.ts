import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PayrollTable } from './payroll-table';

describe('PayrollTable', () => {
  let component: PayrollTable;
  let fixture: ComponentFixture<PayrollTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayrollTable],
    }).compileComponents();

    fixture = TestBed.createComponent(PayrollTable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
