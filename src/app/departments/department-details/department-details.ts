import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';

import { AgGridAngular } from 'ag-grid-angular';
import { AllCommunityModule, ModuleRegistry, ColDef } from 'ag-grid-community';

import employees from '../../../assests/employees.json';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-department-details',
  imports: [FormsModule, MatIconModule, AgGridAngular],
  templateUrl: './department-details.html',
  styleUrl: './department-details.css',
})
export class DepartmentDetails {
  router = inject(Router);
  route = inject(ActivatedRoute);

  searchText = '';

  department = {
    name: '',
    icon: 'business',
    description: '',
    status: 'Active',
    employeeCount: 0,

    head: {
      name: '',
      designation: '',
      employeeId: 0,
      email: '',
      phone: '',
      salary: '',
    },
  };

  employees: any[] = [];

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const departmentName = params['name'];

      this.employees = employees.filter((employee) => employee.department === departmentName);

      if (this.employees.length > 0) {
        const head = this.employees.find((employee) => employee.isDepartmentHead === true);

        this.department = {
          name: departmentName,
          icon: 'business',
          description: departmentName + ' department',
          status: 'Active',
          employeeCount: this.employees.length,

          head: {
            name: head?.name || 'Not Assigned',
            designation: head?.designation || '',
            employeeId: head?.employeeId || 0,
            email: head?.email || '',
            phone: head?.phone || '',
            salary: head?.salary || '',
          },
        };
      }
    });
  }

  columnDefs: ColDef[] = [
    {
      field: 'employeeId',
      headerName: 'ID',
      width: 80,
    },

    {
      field: 'name',
      headerName: 'Employee',
      width: 150,
    },

    {
      field: 'designation',
      headerName: 'Designation',
      flex: .8,
    },

    {
      field: 'email',
      headerName: 'Email',
      flex: 1,
    },

    {
      field: 'phone',
      headerName: 'Phone',
      width: 130,
    },

    {
      field: 'salary',
      headerName: 'Salary',
      width: 100,
    },

    {
      headerName: 'Actions',
      width: 110,
      sortable: false,
      filter: false,

      cellRenderer: () => {
        return `
          <div class="actions">
            <span class="material-icons">visibility</span>
            <span class="material-icons">edit</span>
          </div>
        `;
      },
    },
  ];

  defaultColDef: ColDef = {
    sortable: true,
    resizable: true,
  };

  get filteredEmployees() {
    const search = this.searchText.toLowerCase();

    return this.employees.filter(
      (employee) =>
        employee.name.toLowerCase().includes(search) ||
        employee.email.toLowerCase().includes(search) ||
        employee.employeeId.toString().includes(search),
    );
  }

  navBack() {
    this.router.navigate(['/departments']);
  }
}
