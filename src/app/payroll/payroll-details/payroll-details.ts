import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-payroll-details',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './payroll-details.html',
  styleUrl: './payroll-details.css'
})
export class PayrollDetails {

  @Input() employee: any = null;

  @Output() payslip = new EventEmitter<any>();
  @Output() close = new EventEmitter<void>();
  @Output() process = new EventEmitter<any>();

  viewPayslip() {
    this.payslip.emit(this.employee);
  }

  closeDetails() {
    this.close.emit();
  }

  processPayroll() {
    this.process.emit(this.employee);
  }

}