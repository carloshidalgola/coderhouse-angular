import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { StudentsComponent } from './students/students.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { Observable } from 'rxjs';
import { User } from '../auth/models/user.models';
import { CommonModule } from '@angular/common';
import { environment } from '../../../environments/environment.development';


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule,
    MatSidenavModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    StudentsComponent,
    SharedModule,
    RouterModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  showFiller = false;
  authUser$: Observable<User | null>;
  ENV = environment
  
  constructor(private router: Router, private authService: AuthService) {
    this.authUser$ = this.authService.authUser$;
  }

  logout(): void {
    //localStorage.removeItem('token');
    //this.router.navigate(['auth', 'login']);
    this.authService.logout();
  }
}
