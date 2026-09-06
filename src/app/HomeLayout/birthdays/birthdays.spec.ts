import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Birthdays } from './birthdays';

describe('Birthdays', () => {
  let component: Birthdays;
  let fixture: ComponentFixture<Birthdays>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Birthdays],
    }).compileComponents();

    fixture = TestBed.createComponent(Birthdays);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
