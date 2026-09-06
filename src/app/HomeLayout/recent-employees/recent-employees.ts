import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import employees from '../../../assests/employees.json';

@Component({
  imports: [MatTableModule],
  selector: 'app-recent-employees',
  styleUrl: './recent-employees.css',
  templateUrl: './recent-employees.html',
})
export class RecentEmployees {
  employees = employees
    .sort((a, b) =>
      new Date(b.joiningDate).getTime() -
      new Date(a.joiningDate).getTime()
    )
    .slice(0, 4);

  dataSource = new MatTableDataSource(this.employees);

  displayedColumns = ['id', 'name', 'department', 'designation','joiningDate'];

}
