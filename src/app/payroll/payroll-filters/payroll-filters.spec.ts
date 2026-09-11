import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PayrollFilters } from './payroll-filters';

describe('PayrollFilters', () => {
  let component: PayrollFilters;
  let fixture: ComponentFixture<PayrollFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayrollFilters],
    }).compileComponents();

    fixture = TestBed.createComponent(PayrollFilters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
