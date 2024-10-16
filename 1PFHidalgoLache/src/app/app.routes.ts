import { Routes } from '@angular/router';
import { AuthComponent } from './features/auth/auth.component';
import { NoFoundComponent } from './features/404/404.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { AppComponent } from './app.component';
import { StudentsComponent } from './features/dashboard/students/students.component';
import { CoursesComponent } from './features/dashboard/courses/courses.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
    children: [
      {
        path: 'login', //auth/login
        component: LoginComponent,
      },
      {
        path: 'register', //auth/register
        component: RegisterComponent,
      },
    ],
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: 'students', //dashboard/students
        component: StudentsComponent,
      },

      {
        path: 'courses', //dashboard/courses
        component: CoursesComponent,
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'auth',
    //component: NoFoundComponent
  },
];
