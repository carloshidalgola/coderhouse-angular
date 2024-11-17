import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { restar, sumar } from '../../../store/actions/counter.actions';
import { CounterState } from '../../../store/reducers/counter.reducer';
import { selectCounterValue } from '../../../store/selectors/counter.selectors';
import { Observable } from 'rxjs';
import { AsyncPipe  } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  value$: Observable<number>;

  constructor(private store: Store) {
    this.value$ = this.store.select(selectCounterValue);
  }
  
  ngOnInit(): void {
     //this.suscribeToStore();
  }

  onSumar(): void {
    this.store.dispatch(sumar()); //Invocar a la acción
    console.log(this.value$);
  }
  onRestar(): void {
    this.store.dispatch(restar()); //Invocar a la acción
  }

  /*suscribeToStore() : void {
    this.store.select(selectCounterValue).subscribe({
      next:(data) => {
        this.value = data;
        console.log(data);
      }
    })*/
    /*this.store.subscribe({
      next: (data) =>{
         
        console.log(data)
      } 
    })
  }*/
}
