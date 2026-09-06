import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmployeeDistribution } from './employee-distribution';

describe('EmployeeDistribution', () => {
  let component: EmployeeDistribution;
  let fixture: ComponentFixture<EmployeeDistribution>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeDistribution],
    }).compileComponents();

    fixture = TestBed.createComponent(EmployeeDistribution);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
