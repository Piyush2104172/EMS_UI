import { Component } from '@angular/core';
import { Statistics } from '../statistics/statistics';
import { EmployeeDistribution } from '../employee-distribution/employee-distribution';
import { RecentEmployees } from '../recent-employees/recent-employees';
import { Attendance } from '../attendance/attendance';
import { Birthdays } from '../birthdays/birthdays';
import { QuickActions } from '../quick-actions/quick-actions';

@Component({
  imports: [QuickActions, Statistics, EmployeeDistribution, RecentEmployees, Attendance, Birthdays],
  selector: 'app-home',
  styleUrl: './home.css',
  templateUrl: './home.html',
})
export class Home {
  currentDateTime = new Date();

  pseudoData = {
    welcome: {
      title: 'Welcome back, Admin',
      subtitle: 'Here is what is happening with your organization today.',
    },
  };

  constructor() {
    setInterval(() => {
      this.currentDateTime = new Date();
    }, 1000);
  }
}
