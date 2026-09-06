import { Routes } from '@angular/router';
import { Login } from './login/login';
import { authGuard } from './auth-guard';
import { Employees } from './employees/employees';
import { AttendanceRegister } from './attendance-register/attendance-register';
import { Departments } from './departments/departments';
import { LeaveManager } from './leave-manager/leave-manager';
import { Payroll } from './payroll/payroll';
import { Settings } from './settings/settings';
import { Reports } from './reports/reports';
import { Home } from './HomeLayout/home/home';
import { DashboardLayout } from './dashboard-layout/dashboard-layout';

export const routes: Routes = [

  { path: '', component: Login },

  {
    path: '',
    component: DashboardLayout,
    canActivate: [authGuard],
    children: [

      { path: 'home', component: Home },
      { path: 'employees', component: Employees },
      { path: 'attendance', component: AttendanceRegister },
      { path: 'departments', component: Departments },
      { path: 'leavemanager', component: LeaveManager },
      { path: 'payroll', component: Payroll },
      { path: 'reports', component: Reports },
      { path: 'settings', component: Settings }

    ]
  }
];
