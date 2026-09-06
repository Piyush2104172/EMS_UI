import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import employees from '../../../assests/employees.json';

@Component({
  imports: [MatTableModule],
  selector: 'app-recent-employees',
  styleUrl: './recent-employees.css',
  templateUrl: './recent-employees.html',
})
export class RecentEmployees {
  employees = employees.slice(0,4);

  dataSource = new MatTableDataSource(this.employees);

  displayedColumns = ['id', 'name', 'department', 'designation','joiningDate'];

}
