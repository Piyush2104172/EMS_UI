import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  imports: [MatIconModule],
  selector: 'app-statistics',
  styleUrl: './statistics.css',
  templateUrl: './statistics.html',
})
export class Statistics {

   statistics = [
    {
      title: 'Total Employees',
      value: 125,
      change: 5,
      icon: 'people',
      type: 'positive',
      description: 'vs last month'
    },
    {
      title: 'Departments',
      value: 8,
      change: 0,
      icon: 'business',
      type: 'positive',
      description: 'vs last month'
    },
    {
      title: 'Active Employees',
      value: 110,
      change: 3,
      icon: 'person',
      type: 'positive',
      description: 'vs last month'
    },
    {
      title: 'On Leave',
      value: 15,
      change: 2,
      icon: 'person_off',
      type: 'negative',
      description: 'vs last month'
    }
  ];

}
