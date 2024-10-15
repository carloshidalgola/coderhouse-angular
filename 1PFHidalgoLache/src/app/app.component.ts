import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./features/dashboard/dashboard.component";
import { StudentsComponent } from './features/dashboard/students/students.component';
import { MY_URL_PROVIDER } from './core/providers';

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
      provide: ProductsService,
      useFactory: ()=>{
        const isDev = true;
        if(isDev){
            return new  ProductsMockService;
        }
        return new ProductsService;
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
