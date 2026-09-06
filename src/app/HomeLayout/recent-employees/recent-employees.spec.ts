import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecentEmployees } from './recent-employees';

describe('RecentEmployees', () => {
  let component: RecentEmployees;
  let fixture: ComponentFixture<RecentEmployees>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecentEmployees],
    }).compileComponents();

    fixture = TestBed.createComponent(RecentEmployees);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
