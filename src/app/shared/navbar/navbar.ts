import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  imports: [MatIconModule,RouterLink, RouterLinkActive],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
    constructor(public router: Router){}

   
  menuItems = [
    { label: 'Home', icon: 'home', path: '/home' },
    { label: 'Employees', icon: 'people', path: '/employees' },
    { label: 'Departments', icon: 'business', path: '/departments' },
    { label: 'Attendance', icon: 'event_available', path: '/attendance' },
    { label: 'Leave Management', icon: 'description', path: '/leavemanager' },
    { label: 'Payroll', icon: 'credit_card', path: '/payroll' },
    { label: 'Reports', icon: 'bar_chart', path: '/reports' },
    { label: 'Settings', icon: 'settings', path: '/settings' }
  ];

  navigate(path: string) {
    this.router.navigate([path]);
  }

  logout(){
   sessionStorage.removeItem('isLoggedIn');
   this.router.navigate(['/']);
   alert('Logeed out succesfully');
  }



}
