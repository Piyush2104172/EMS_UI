import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';


@Component({
  imports: [MatIconModule],
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {

    constructor(private router: Router){}

   menuItems = [
    { label: 'Home', icon: 'home' },
    { label: 'Employees', icon: 'people' },
    { label: 'Departments', icon: 'business' },
    { label: 'Attendance', icon: 'event_available' },
    { label: 'Leave Management', icon: 'description' },
    { label: 'Payroll', icon: 'credit_card' },
    { label: 'Reports', icon: 'bar_chart' },
    { label: 'Settings', icon: 'settings' }
  ];

  logout(){
   sessionStorage.setItem('isLoggedIn','');
   this.router.navigate(['/']);
   alert('Logeed out succesfully');
  }



}
