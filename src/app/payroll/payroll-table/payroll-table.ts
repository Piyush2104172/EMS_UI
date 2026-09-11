import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-payroll-table',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './payroll-table.html',
  styleUrl: './payroll-table.css'
})
export class PayrollTable {

  @Input() employees: any[] = [];

  @Output() selectEmployee = new EventEmitter<any>();
  @Output() processPayroll = new EventEmitter<any>();
  @Output() rejectPayroll = new EventEmitter<any>();
  @Output() payslip = new EventEmitter<any>();

  select(employee: any) {
    this.selectEmployee.emit(employee);
  }

  process(employee: any) {
    this.processPayroll.emit(employee);
  }

  reject(employee: any) {
    this.rejectPayroll.emit(employee);
  }

  viewPayslip(employee: any) {
    this.payslip.emit(employee);
  }

}