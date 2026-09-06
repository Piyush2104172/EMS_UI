import { Component } from '@angular/core';
import { Menu } from '../menu/menu';
import { Navbar } from '../navbar/navbar';
import { Statistics } from '../statistics/statistics';
import { EmployeeDistribution } from '../employee-distribution/employee-distribution';
import { RecentEmployees } from '../recent-employees/recent-employees';
import { Attendance } from '../attendance/attendance';
import { Birthdays } from '../birthdays/birthdays';
import { QuickActions } from '../quick-actions/quick-actions';

@Component({
  imports: [
    QuickActions,
    Menu,
    Navbar,
    Statistics,
    EmployeeDistribution,
    RecentEmployees,
    Attendance,
    Birthdays,
  ],
  selector: 'app-dashboard',
  styleUrl: './dashboard.css',
  templateUrl: './dashboard.html',
})
export class Dashboard {
  currentDateTime = new Date();

  pseudoData = {
    welcome: {
      title: 'Welcome back, Admin!',
      subtitle: "Here's what's happening in your organization today.",
    },

    statistics: [
      {
        title: 'Total Employees',
        value: 125,
        change: 5,
        icon: 'people',
      },
      {
        title: 'Departments',
        value: 8,
        change: 0,
        icon: 'business',
      },
      {
        title: 'Active Employees',
        value: 110,
        change: 3,
        icon: 'person',
      },
      {
        title: 'On Leave',
        value: 15,
        change: -2,
        icon: 'person_off',
      },
    ],
  };

  constructor() {
    setInterval(() => {
      this.currentDateTime = new Date();
    }, 1000);
  }
}
