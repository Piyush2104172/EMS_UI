import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-payroll-filters',
  imports: [
    FormsModule,
    MatIconModule
  ],
  templateUrl: './payroll-filters.html',
  styleUrl: './payroll-filters.css'
})
export class PayrollFilters {

  @Input() departments: string[] = [];
  @Input() years: number[] = [];

  @Input() searchText = '';
  @Input() selectedDepartment = '';
  @Input() selectedMonth = '';
  @Input() selectedYear = '';
  @Input() selectedStatus = '';

  @Output() searchTextChange = new EventEmitter<string>();
  @Output() departmentChange = new EventEmitter<string>();
  @Output() monthChange = new EventEmitter<string>();
  @Output() yearChange = new EventEmitter<string>();
  @Output() statusChange = new EventEmitter<string>();
  @Output() reset = new EventEmitter<void>();

}