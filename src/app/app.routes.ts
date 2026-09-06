import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Dashboard } from './DashboardLayout/dashboard/dashboard';
import { authGuard } from './auth-guard';

export const routes: Routes = [
  {path: '',component: Login },
  {path: 'dashboard',component: Dashboard,canActivate:[authGuard] },
];
