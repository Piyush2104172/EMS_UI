import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-leave-list',
  imports: [MatIconModule],
  templateUrl: './leave-list.html',
  styleUrl: './leave-list.css',
})
export class LeaveList {
  @Input() requests: any[] = [];

  @Output() approve = new EventEmitter<any>();
  @Output() reject = new EventEmitter<any>();

  approveLeave(leave: any) {
    this.approve.emit(leave);
  }

  rejectLeave(leave: any) {
    this.reject.emit(leave);
  }
}
