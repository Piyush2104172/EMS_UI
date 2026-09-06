import { Component } from '@angular/core';
import employees from '../../../assests/employees.json';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  imports: [MatPaginatorModule],
  selector: 'app-birthdays',
  styleUrl: './birthdays.css',
  templateUrl: './birthdays.html',
})
export class Birthdays {
  currentMonth = new Date().getMonth() + 1;
  currentDay = new Date().getDate();

  birthdays = employees.filter((employee) => {
    const month = Number(employee.dateOfBirth.substring(5, 7));
    const day = Number(employee.dateOfBirth.substring(8, 10));

    return month === this.currentMonth && day >= this.currentDay;
  });

  displayedBirthdays = this.birthdays.slice(0, 3);

  getMonth(date: string) {
    const month = Number(date.substring(5, 7));

    const months = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];

    return months[month - 1];
  }
}
