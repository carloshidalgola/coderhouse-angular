import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./features/dashboard/dashboard.component";
import { MY_URL_PROVIDER } from './core/providers';
import { StudentsService } from './core/services/students.service';
import { StudentsMockService } from './core/mocks/students-mock.service';
import { environment } from '../environments/environment.development';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DashboardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    /*{
      provide: ProductsService, //Cuando algun metodo deseeo esta clase
      useClass: ProductsMockService //Relamente provee el Mock
    },*/
    /*{
      provide: StudentsService,
      useFactory: ()=>{        
        if(environment.stage === 'Dev'){
            return new  StudentsMockService;
        }
        return new StudentsService;
      }
    },*/
    /*{
      provide: MY_URL,
      useValue: 'http://localhost:9999' ,
    }*/

    MY_URL_PROVIDER,
  ],
})
export class AppComponent {
  title = '1PFHidalgoLache';
}
