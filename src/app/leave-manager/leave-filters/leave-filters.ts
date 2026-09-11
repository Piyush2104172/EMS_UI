import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-leave-filters',
  imports: [FormsModule, MatIconModule],
  templateUrl: './leave-filters.html',
  styleUrl: './leave-filters.css',
})
export class LeaveFilters {
  @Input() leaveTypes: string[] = [];

  @Input() searchText = '';
  @Input() selectedLeaveType = '';
  @Input() selectedStatus = '';
  @Input() fromDate = '';
  @Input() toDate = '';

  @Output() searchTextChange = new EventEmitter<string>();
  @Output() leaveTypeChange = new EventEmitter<string>();
  @Output() statusChange = new EventEmitter<string>();
  @Output() fromDateChange = new EventEmitter<string>();
  @Output() toDateChange = new EventEmitter<string>();
  @Output() reset = new EventEmitter<void>();
}
