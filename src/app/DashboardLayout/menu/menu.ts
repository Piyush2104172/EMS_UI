import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  imports: [MatIconModule],
  selector: 'app-menu',
  styleUrl: './menu.css',
  templateUrl: './menu.html',
})
export class Menu {
  menuData = {
    logo: 'EMS',
    systemName: 'Employee Management System',

    searchPlaceholder: 'Search employees, departments...',

    notificationCount: 3,

    admin: {
      initials: 'AS',
      name: 'Creater',
      role: 'Administrator',
    },
  };
}
