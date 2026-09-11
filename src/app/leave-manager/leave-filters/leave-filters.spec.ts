import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeaveFilters } from './leave-filters';

describe('LeaveFilters', () => {
  let component: LeaveFilters;
  let fixture: ComponentFixture<LeaveFilters>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveFilters],
    }).compileComponents();

    fixture = TestBed.createComponent(LeaveFilters);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
