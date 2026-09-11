import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { PayrollSummary } from './payroll-summary/payroll-summary';
import { PayrollFilters } from './payroll-filters/payroll-filters';
import { PayrollTable } from './payroll-table/payroll-table';
import { PayrollDetails } from './payroll-details/payroll-details';
import { Payslip } from './payslip/payslip';

import employees from '../../assests/employeeLeave.json';

@Component({
  selector: 'app-payroll',
  imports: [
    FormsModule,
    MatIconModule,
    MatDialogModule,
    PayrollSummary,
    PayrollFilters,
    PayrollTable,
    PayrollDetails,
  ],
  templateUrl: './payroll.html',
  styleUrl: './payroll.css',
})
export class Payroll {
  Math = Math;

  dialog = inject(MatDialog);

  searchText = '';
  selectedDepartment = '';
  selectedMonth = 'September';
  selectedYear = '2026';
  selectedStatus = '';

  currentPage = 1;
  pageSize = 10;

  selectedEmployee: any = null;

  employees = employees;

  departments = [...new Set(employees.map((employee) => employee.department))];

  years = [2026];

  get filteredEmployees() {
    return this.employees.filter((employee) => {
      const search = this.searchText.toLowerCase().trim();

      const matchesSearch =
        employee.name.toLowerCase().includes(search) ||
        employee.department.toLowerCase().includes(search) ||
        employee.employeeId.toString().includes(search);

      const matchesDepartment =
        !this.selectedDepartment || employee.department === this.selectedDepartment;

      const matchesMonth = !this.selectedMonth || employee.payroll.month === this.selectedMonth;

      const matchesYear =
        !this.selectedYear || employee.payroll.year.toString() === this.selectedYear;

      const matchesStatus = !this.selectedStatus || employee.payroll.status === this.selectedStatus;

      return matchesSearch && matchesDepartment && matchesMonth && matchesYear && matchesStatus;
    });
  }

  get paginatedEmployees() {
    const start = (this.currentPage - 1) * this.pageSize;

    return this.filteredEmployees.slice(start, start + this.pageSize);
  }

  get totalPages() {
    return Math.ceil(this.filteredEmployees.length / this.pageSize);
  }

  get totalEmployees() {
    return this.filteredEmployees.length;
  }

  get totalPayroll() {
    return this.filteredEmployees.reduce(
      (total, employee) => total + employee.payroll.netSalary,
      0,
    );
  }

  get processedEmployees() {
    return this.filteredEmployees.filter((employee) => employee.payroll.status === 'Paid').length;
  }

  get pendingEmployees() {
    return this.filteredEmployees.filter((employee) => employee.payroll.status === 'Pending')
      .length;
  }

  get totalLeaveDeduction() {
    return this.filteredEmployees.reduce(
      (total, employee) => total + employee.payroll.deductions.leaveDeduction,
      0,
    );
  }

  selectEmployee(employee: any) {
    this.selectedEmployee = employee;
  }

  closeDetails() {
    this.selectedEmployee = null;
  }

  openPayslip(employee: any) {
    this.dialog.open(Payslip, {
      data: employee,
      width: '600px',
      maxWidth: '90vw',
      maxHeight: '85vh',
      autoFocus: false,
    });
  }

  processPayroll(employee: any) {
    employee.payroll.status = 'Paid';
    employee.payroll.paymentDate = new Date().toISOString().split('T')[0];
  }

  resetFilters() {
    this.searchText = '';
    this.selectedDepartment = '';
    this.selectedMonth = 'September';
    this.selectedYear = '2026';
    this.selectedStatus = '';
    this.currentPage = 1;
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  rejectPayroll(employee: any) {
    console.log(employee.payroll.paymentDate);
    employee.payroll.status = 'Rejected';
    employee.payroll.paymentDate = null;
  }

  get rejectedEmployees() {
    return this.filteredEmployees.filter((employee) => employee.payroll.status === 'Rejected')
      .length;
  }


}
