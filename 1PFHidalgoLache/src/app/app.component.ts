import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { MY_URL_PROVIDER } from './core/providers';
import { StudentsService } from './core/services/students.service';
import { StudentsMockService } from './core/mocks/students-mock.service';
import { environment } from '../environments/environment.development';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    MY_URL_PROVIDER,
    /*{
      provide: StudentsService,
      useFactory: () => {
        if (environment.stage === 'Dev') {
          return new StudentsMockService();
        }
        return new StudentsService();
      }
    },*/
  ],
})
export class AppComponent {
  title = '1PFHidalgoLache';
}
