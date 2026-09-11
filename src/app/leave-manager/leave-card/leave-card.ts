import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-leave-card',
  imports: [MatIconModule],
  templateUrl: './leave-card.html',
  styleUrl: './leave-card.css',
})
export class LeaveCard {
  @Input() leave: any;

  @Output() approve = new EventEmitter<any>();
  @Output() reject = new EventEmitter<any>();

  approveLeave() {
    this.approve.emit(this.leave);
  }

  rejectLeave() {
    this.reject.emit(this.leave);
  }
}
