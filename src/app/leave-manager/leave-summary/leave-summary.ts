import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-leave-summary',
  imports: [MatIconModule],
  templateUrl: './leave-summary.html',
  styleUrl: './leave-summary.css',
})
export class LeaveSummary {
  @Input() total = 0;
  @Input() pending = 0;
  @Input() approved = 0;
  @Input() rejected = 0;
}
