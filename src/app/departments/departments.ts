import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import employees from '../../assests/employees.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  imports: [FormsModule, MatIconModule],
  templateUrl: './departments.html',
  styleUrl: './departments.css',
})
export class Departments {
  constructor(private router:Router){}


  searchText = '';

  departmentInfo = [
    {
      name: 'Engineering',
      icon: 'code',
      description: 'Software development and technical operations',
    },
    {
      name: 'HR',
      icon: 'groups',
      description: 'Employee relations, recruitment and talent management',
    },
    {
      name: 'Finance',
      icon: 'account_balance',
      description: 'Financial planning, accounting and budget management',
    },
    {
      name: 'Marketing',
      icon: 'campaign',
      description: 'Brand management, advertising and digital marketing',
    },
    {
      name: 'Sales',
      icon: 'trending_up',
      description: 'Sales operations and customer relationship management',
    },
    {
      name: 'Operations',
      icon: 'settings',
      description: 'Business operations and general administration',
    },
    {
      name: 'IT',
      icon: 'desktop_windows',
      description: 'IT infrastructure, system support and security',
    },
    {
      name: 'Legal',
      icon: 'gavel',
      description: 'Compliance, legal affairs and risk management',
    },
  ];

  get departments() {
    return this.departmentInfo
      .map((department) => {
        const departmentEmployees = employees.filter(
          (employee) => employee.department === department.name,
        );

        const head = departmentEmployees.find((employee) => employee.isDepartmentHead);

        return {
          ...department,
          employees: departmentEmployees.length,
          head: head ? head.name : 'Not Assigned',
        };
      })
      .filter((department) =>
        department.name.toLowerCase().includes(this.searchText.toLowerCase()),
      );
  }
  viewDepartment(department: any) {
    this.router.navigate(['/departments', department.name]);
  }
}
