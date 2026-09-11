import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeaveSummary } from './leave-summary';

describe('LeaveSummary', () => {
  let component: LeaveSummary;
  let fixture: ComponentFixture<LeaveSummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeaveSummary],
    }).compileComponents();

    fixture = TestBed.createComponent(LeaveSummary);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
