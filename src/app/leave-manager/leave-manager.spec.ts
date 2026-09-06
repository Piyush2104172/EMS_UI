import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeaveManager } from './leave-manager';

describe('LeaveManager', () => {
  let component: LeaveManager;
  let fixture: ComponentFixture<LeaveManager>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveManager],
    }).compileComponents();

    fixture = TestBed.createComponent(LeaveManager);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
