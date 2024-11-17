import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';
import { StudentsService } from '../../../../core/services/students.service';
import { Student } from '../models/student.model';
import { Store } from '@ngrx/store';
import { InscriptionsActions } from '../store/inscriptions.actions';
import { Observable } from 'rxjs';
import { Inscription } from '../models/inscription.model';
import { selectInscriptions } from '../store/inscriptions.selectors';
import { AsyncPipe } from '@angular/common';
import {MatExpansionModule} from '@angular/material/expansion';

@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [SharedModule, AsyncPipe, CommonModule, MatExpansionModule],
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StudentDetailComponent implements OnInit {
  idStudent?: string;
  student?: Student;
  inscriptions$: Observable<Inscription[]>;

  constructor(
    private activatedRoute: ActivatedRoute,
    private studentsService: StudentsService,
    private store: Store
  ) {
    console.log('La ruta activa es: ', activatedRoute);
    this.idStudent = activatedRoute.snapshot.params['id'];
    this.inscriptions$ = this.store.select(selectInscriptions);
  }

  ngOnInit(): void {
    this.studentsService
      .getStudentByID(this.activatedRoute.snapshot.params['id'])
      .subscribe({
        next: (data) => {
          this.student = data;
        },
      });

    this.store.dispatch(InscriptionsActions.loadInscriptionss());
  }

}

export class ExpansionOverviewExample {
  readonly panelOpenState = signal(false);
}