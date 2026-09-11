import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { LeaveSummary } from './leave-summary/leave-summary';
import { LeaveFilters } from './leave-filters/leave-filters';
import { LeaveCard } from './leave-card/leave-card';
import { LeaveList } from './leave-list/leave-list';

import employees from '../../assests/employeeLeave.json';

@Component({
  selector: 'app-leave-manager',
  imports: [FormsModule, MatIconModule, LeaveSummary, LeaveFilters, LeaveCard, LeaveList],
  templateUrl: './leave-manager.html',
  styleUrl: './leave-manager.css',
})
export class LeaveManager {
  Math = Math;

  searchText = '';
  selectedLeaveType = '';
  selectedStatus = '';

  fromDate = '';
  toDate = '';

  sortBy = 'newest';
  viewMode = 'grid';

  currentPage = 1;
  pageSize = 8;

  leaveTypes = ['Sick Leave', 'Casual Leave', 'Annual Leave', 'Maternity Leave'];

  leaveRequests = employees.map((employee, index) => {
    const leaveTypes = ['Sick Leave', 'Casual Leave', 'Annual Leave', 'Maternity Leave'];

    const statuses = ['Pending', 'Approved', 'Pending', 'Rejected'];

    const startDay = (index % 20) + 1;
    const days = (index % 5) + 1;

    const fromDate = `2026-09-${String(startDay).padStart(2, '0')}`;

    const endDay = Math.min(startDay + days - 1, 28);

    const toDate = `2026-09-${String(endDay).padStart(2, '0')}`;

    const appliedDay = Math.max(1, startDay - 3);

    const appliedOn = `2026-09-${String(appliedDay).padStart(2, '0')}`;

    return {
      employeeId: employee.employeeId,
      employee: employee.name,
      department: employee.department,
      leaveType: leaveTypes[index % leaveTypes.length],
      fromDate,
      toDate,
      days,
      status: statuses[index % statuses.length],
      appliedOn,
    };
  });

  get filteredRequests() {
    let requests = this.leaveRequests.filter((leave) => {
      const search = this.searchText.toLowerCase().trim();

      const matchesSearch =
        leave.employee.toLowerCase().includes(search) ||
        leave.department.toLowerCase().includes(search) ||
        leave.employeeId.toString().includes(search);

      const matchesLeaveType =
        !this.selectedLeaveType || leave.leaveType === this.selectedLeaveType;

      const matchesStatus = !this.selectedStatus || leave.status === this.selectedStatus;

      const matchesFromDate = !this.fromDate || leave.fromDate >= this.fromDate;

      const matchesToDate = !this.toDate || leave.toDate <= this.toDate;

      return matchesSearch && matchesLeaveType && matchesStatus && matchesFromDate && matchesToDate;
    });

    requests = [...requests].sort((a, b) => {
      if (this.sortBy === 'newest') {
        return b.appliedOn.localeCompare(a.appliedOn);
      }

      return a.appliedOn.localeCompare(b.appliedOn);
    });

    return requests;
  }

  get paginatedRequests() {
    const start = (this.currentPage - 1) * this.pageSize;

    return this.filteredRequests.slice(start, start + this.pageSize);
  }

  get totalPages() {
    return Math.ceil(this.filteredRequests.length / this.pageSize);
  }

  get totalRequests() {
    return this.leaveRequests.length;
  }

  get pendingRequests() {
    return this.leaveRequests.filter((leave) => leave.status === 'Pending').length;
  }

  get approvedRequests() {
    return this.leaveRequests.filter((leave) => leave.status === 'Approved').length;
  }

  get rejectedRequests() {
    return this.leaveRequests.filter((leave) => leave.status === 'Rejected').length;
  }

  approveLeave(leave: any) {
    leave.status = 'Approved';
  }

  rejectLeave(leave: any) {
    leave.status = 'Rejected';
  }

  changePage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  changeView(view: string) {
    this.viewMode = view;
  }

  resetFilters() {
    this.searchText = '';
    this.selectedLeaveType = '';
    this.selectedStatus = '';

    this.fromDate = '';
    this.toDate = '';

    this.sortBy = 'newest';

    this.currentPage = 1;
  }
}
