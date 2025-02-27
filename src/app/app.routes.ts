import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'password-forgot',
    loadComponent: () => import('./password-forgot/password-forgot.page').then( m => m.PasswordForgotPage)
  },
  {
    path: 'account-create',
    loadComponent: () => import('./account-create/account-create.page').then( m => m.AccountCreatePage)
  },
  {
    path: 'home-page',
    loadComponent: () => import('./home-page/home-page.page').then( m => m.HomePagePage)
  },
];
