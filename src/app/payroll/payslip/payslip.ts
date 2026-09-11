import { Component, Inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material/dialog';

@Component({
  selector: 'app-payslip',
  imports: [
    CommonModule,
    MatIconModule
  ],
  templateUrl: './payslip.html',
  styleUrl: './payslip.css'
})
export class Payslip {

  constructor(
    @Inject(MAT_DIALOG_DATA)
    public employee: any,

    private dialogRef: MatDialogRef<Payslip>
  ) {}

  closePayslip() {
    this.dialogRef.close();
  }

  printPayslip() {
    window.print();
  }

  downloadPayslip() {
    alert('PDF download will be added later.');
  }

}