import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { AgGridAngular } from 'ag-grid-angular';
import {
  AllCommunityModule,
  ModuleRegistry,
  ColDef
} from 'ag-grid-community';

import { Statistics } from '../HomeLayout/statistics/statistics';
import employeesData from '../../assests/employees.json';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-employees',
  imports: [
    FormsModule,
    MatIconModule,
    Statistics,
    AgGridAngular
  ],
  templateUrl: './employees.html',
  styleUrl: './employees.css'
})
export class Employees {

  employees = employeesData;
  filteredEmployees = employeesData;

  searchText = '';
  selectedDepartment = '';
  selectedStatus = '';

  departments = [...new Set(employeesData.map(e => e.department))];

  columnDefs: ColDef[] = [
    {
      field: 'employeeId',
      headerName: 'Employee ID',
      width: 120
    },
    {
      field: 'name',
      headerName: 'Name',
      flex: 1
    },
    {
      field: 'department',
      headerName: 'Department',
      flex: 1
    },
    {
      field: 'designation',
      headerName: 'Position',
      flex: 1
    },
    {
      field: 'email',
      headerName: 'Email',
      flex: 1.5
    },
    {
      field: 'phone',
      headerName: 'Phone',
      width: 130
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 110,
      cellRenderer: (params: any) => {
        const span = document.createElement('span');

        span.textContent = params.value;
        span.className = 'status ' + params.value.toLowerCase();

        return span;
      }
    },
    {
      headerName: 'Actions',
      width: 130,
      sortable: false,
      filter: false,
      cellRenderer: (params: any) => {

        const div = document.createElement('div');
        div.className = 'actions';

        // const view = document.createElement('span');
        // view.className = 'material-icons action-icon';
        // view.textContent = 'visibility';
        // view.title = 'View';

        // const edit = document.createElement('span');
        // edit.className = 'material-icons action-icon';
        // edit.textContent = 'edit';
        // edit.title = 'Edit';

        const deleteIcon = document.createElement('span');
        deleteIcon.className = 'material-icons action-icon delete';
        deleteIcon.textContent = 'delete';
        deleteIcon.title = 'Delete';

        // view.onclick = () => {
        //   console.log('View:', params.data);
        // };

        // edit.onclick = () => {
        //   console.log('Edit:', params.data);
        // };

        deleteIcon.onclick = () => {
          console.log('Delete:', params.data);
        };

        div.append( deleteIcon);

        return div;
      }
    }
  ];

  defaultColDef: ColDef = {
    sortable: true,
    filter: true,
    resizable: true
  };

  applyFilters() {

    const search = this.searchText.toLowerCase();

    this.filteredEmployees = this.employees.filter(employee => {

      const matchesSearch =
        employee.name.toLowerCase().includes(search) ||
        employee.email.toLowerCase().includes(search) ||
        employee.employeeId.toString().includes(search);

      const matchesDepartment =
        !this.selectedDepartment ||
        employee.department === this.selectedDepartment;

      const matchesStatus =
        !this.selectedStatus ||
        employee.status === this.selectedStatus;

      return matchesSearch && matchesDepartment && matchesStatus;
    });
  }

  clearFilters() {
    this.searchText = '';
    this.selectedDepartment = '';
    this.selectedStatus = '';

    this.filteredEmployees = this.employees;
  }
}