import { Component,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import attendanceData from '../../assests/employeeAttendance.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-attendance-register',
  imports: [
    FormsModule,
    MatIconModule
  ],
  templateUrl: './attendance-register.html',
  styleUrl: './attendance-register.css'
})
export class AttendanceRegister {
  // constructor(private router:Router){}
   router = inject(Router);
   
   

  dates = Object.keys(attendanceData);

  selectedDate = this.dates[this.dates.length-1];

  get attendance() {
    return attendanceData[this.selectedDate as keyof typeof attendanceData] || [];
  }


  get departments() {

    const departmentNames = [
      ...new Set(
        this.attendance.map(employee => employee.department)
      )
    ];

    return departmentNames.map(name => {

      const employees = this.attendance.filter(
        employee => employee.department === name
      );

      return {
        name: name,
        employees: employees.length,
        present: employees.filter(
          employee => employee.status === 'Present'
        ).length,
        absent: employees.filter(
          employee => employee.status === 'Absent'
        ).length
      };

    });

  }

  get totalEmployees() {
  return this.attendance.length;
}

get totalPresent() {
  return this.attendance.filter(
    employee => employee.status === 'Present'
  ).length;
}

get totalAbsent() {
  return this.attendance.filter(
    employee => employee.status === 'Absent'
  ).length;
}


  get formattedDate() {

    const date = new Date(this.selectedDate + 'T00:00:00');

    return date.toLocaleDateString('en-IN', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

  }

 viewAttendance(department: any) {
  
  console.log('Department:', department);
  console.log('Date:', this.selectedDate);

  this.router.navigate(['/attendance', department.name], {
    queryParams: {
      date: this.selectedDate
    }
  });


 }
}