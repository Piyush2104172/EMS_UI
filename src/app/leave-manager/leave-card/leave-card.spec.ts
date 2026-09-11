import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeaveCard } from './leave-card';

describe('LeaveCard', () => {
  let component: LeaveCard;
  let fixture: ComponentFixture<LeaveCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveCard],
    }).compileComponents();

    fixture = TestBed.createComponent(LeaveCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
