import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { AgGridAngular } from 'ag-grid-angular';
import {
  AllCommunityModule,
  ModuleRegistry,
  ColDef
} from 'ag-grid-community';

import attendanceData from '../../../assests/employeeAttendance.json';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-attendance-details',
  imports: [
    MatIconModule,
    AgGridAngular
  ],
  templateUrl: './attendance-details.html',
  styleUrl: './attendance-details.css'
})
export class AttendanceDetails {

  router = inject(Router);
  route = inject(ActivatedRoute);

  department = '';
  selectedDate = '';

  presentEmployees: any[] = [];
  absentEmployees: any[] = [];

  filteredPresentEmployees: any[] = [];
  filteredAbsentEmployees: any[] = [];


  ngOnInit() {

    this.route.params.subscribe(params => {
      this.department = params['name'];
      this.loadAttendance();
    });

    this.route.queryParams.subscribe(params => {
      this.selectedDate = params['date'];
      this.loadAttendance();
    });

  }


  loadAttendance() {

    if (!this.department || !this.selectedDate) {
      return;
    }

    const attendance =
      attendanceData[
        this.selectedDate as keyof typeof attendanceData
      ] || [];

    const employees = attendance.filter(
      employee => employee.department === this.department
    );

    this.presentEmployees = employees.filter(
      employee => employee.status === 'Present'
    );

    this.absentEmployees = employees.filter(
      employee => employee.status === 'Absent'
    );

    this.filteredPresentEmployees = this.presentEmployees;
    this.filteredAbsentEmployees = this.absentEmployees;

  }


  filterPresent(event: Event) {

    const search =
      (event.target as HTMLInputElement).value.toLowerCase();

    this.filteredPresentEmployees =
      this.presentEmployees.filter(employee =>
        employee.name.toLowerCase().includes(search) ||
        employee.employeeId.toString().includes(search) ||
        employee.designation.toLowerCase().includes(search)
      );

  }


  filterAbsent(event: Event) {

    const search =
      (event.target as HTMLInputElement).value.toLowerCase();

    this.filteredAbsentEmployees =
      this.absentEmployees.filter(employee =>
        employee.name.toLowerCase().includes(search) ||
        employee.employeeId.toString().includes(search) ||
        employee.designation.toLowerCase().includes(search)
      );

  }


  get formattedDate() {

    if (!this.selectedDate) {
      return '';
    }

    const date =
      new Date(this.selectedDate + 'T00:00:00');

    return date.toLocaleDateString('en-IN', {
      weekday: 'long',
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });

  }


  getDepartmentIcon() {

    const icons: any = {
      Engineering: 'code',
      IT: 'computer',
      HR: 'groups',
      Finance: 'bar_chart',
      Marketing: 'campaign',
      Operations: 'settings',
      Sales: 'shopping_cart',
      Legal: 'gavel'
    };

    return icons[this.department] || 'business';

  }


  presentColumns: ColDef[] = [

    {
      field: 'employeeId',
      headerName: 'Employee ID',
      width: 120
    },

    {
      field: 'name',
      headerName: 'Employee Name',
      flex: 1
    },

    {
      field: 'designation',
      headerName: 'Designation',
      flex: 1
    },

    {
      field: 'checkInTime',
      headerName: 'Time In',
      width: 120
    },

    {
      field: 'status',
      headerName: 'Status',
      width: 110
    }

  ];


  absentColumns: ColDef[] = [

    {
      field: 'employeeId',
      headerName: 'Employee ID',
      width: 120
    },

    {
      field: 'name',
      headerName: 'Employee Name',
      flex: 1
    },

    {
      field: 'designation',
      headerName: 'Designation',
      flex: 1
    },

    {
      field: 'status',
      headerName: 'Status',
      width: 110
    }

  ];


  defaultColDef: ColDef = {
    sortable: true,
    resizable: true
  };


  goBack() {

    this.router.navigate(['/attendance']);

  }

}