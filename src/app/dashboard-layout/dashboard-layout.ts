import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from '../shared/menu/menu';
import { Navbar } from '../shared/navbar/navbar';

@Component({
  imports: [
     RouterOutlet,
    Menu,
    Navbar,
  ],
  selector: 'app-dashboard-layout',
  styleUrl: './dashboard-layout.css',
  templateUrl: './dashboard-layout.html',
})
export class DashboardLayout {
  
}
