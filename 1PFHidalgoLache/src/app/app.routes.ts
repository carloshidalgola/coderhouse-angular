import { Routes } from '@angular/router';
import { HomeComponent } from './features/dashboard/home/home.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./features/auth/auth.component').then(m => m.AuthComponent)
  },
  {
    path: 'auth',
    loadComponent: () => import('./features/auth/auth.component').then(m => m.AuthComponent),
    children: [
      {
        path: 'login', //auth/login
        loadComponent: () => import('./features/auth/login/login.component').then(m => m.LoginComponent),
      },
      {
        path: 'register', //auth/register
        loadComponent: () => import('./features/auth/register/register.component').then(m => m.RegisterComponent),
      },
    ],
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () => import('./features/dashboard/dashboard.component').then(m => m.DashboardComponent),
    children: [
      {
        path: 'home', //dashboard/home
        loadComponent: () => import('./features/dashboard/home/home.component').then(m => m.HomeComponent),
      },
      {
        path: 'students', //dashboard/students
        loadComponent: () => import('./features/dashboard/students/students.component').then(m => m.StudentsComponent),
      },
      {
        path: 'students/:id/detail', //dashboard/students/999/detail
        loadComponent: () => import('./features/dashboard/students/student-detail/student-detail.component').then(m => m.StudentDetailComponent),
      },
      {
        path: 'courses', //dashboard/courses
        loadComponent: () => import('./features/dashboard/courses/courses.component').then(m => m.CoursesComponent),
      },
      { 
        path: '', 
        loadComponent: () => import('./features/dashboard/home/home.component').then(m => m.HomeComponent),
      }, // Redireccionar a Home si no hay subruta
      { 
        path: '**', 
        loadComponent: () => import('./features/404/notfound.component').then(m => m.NoFoundComponent),
        //redirectTo: '' 
      }, // Redirigir a Home en lugar de usar un componente
    ],
  },
  {
    path: '**',
    //redirectTo: 'auth',
    loadComponent: () => import('./features/404/notfound.component').then(m => m.NoFoundComponent),
  },
];
