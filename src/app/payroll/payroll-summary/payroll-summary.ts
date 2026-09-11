import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-payroll-summary',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './payroll-summary.html',
  styleUrl: './payroll-summary.css'
})
export class PayrollSummary {

  @Input() totalEmployees = 0;
  @Input() totalPayroll = 0;
  @Input() processed = 0;
  @Input() pending = 0;
  @Input() rejected = 0;
  @Input() leaveDeduction = 0;

  get cards() {
    return [
      {
        title: 'Total Employees',
        value: this.totalEmployees,
        text: 'Employees in payroll',
        icon: 'people',
        type: 'employees',
        money: false
      },
      {
        title: 'Total Payroll',
        value: this.totalPayroll,
        text: 'Current month',
        icon: 'payments',
        type: 'payroll',
        money: true
      },
      {
        title: 'Processed',
        value: this.processed,
        text: 'Payroll processed',
        icon: 'check_circle',
        type: 'processed',
        money: false
      },
      {
        title: 'Rejected',
        value: this.rejected,
        text: 'Payroll rejected',
        icon: 'cancel',
        type: 'rejected',
        money: false
      },
      {
        title: 'Pending',
        value: this.pending,
        text: 'Awaiting processing',
        icon: 'schedule',
        type: 'pending',
        money: false
      },
      {
        title: 'Leave Deduction',
        value: this.leaveDeduction,
        text: 'Current month',
        icon: 'remove_circle',
        type: 'deduction',
        money: true
      }
    ];
  }
}