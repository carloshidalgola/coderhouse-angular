import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedModule } from '../../../../shared/shared.module';
import { StudentsService } from '../../../../core/services/students.service';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.scss',
})
export class StudentDetailComponent implements OnInit {
  idStudent?: string;
  student?: Student;

  constructor(
    private activatedRoute: ActivatedRoute,
    private studentsService: StudentsService
  ) {
    console.log('La ruta activa es: ', activatedRoute);
    this.idStudent = activatedRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.studentsService
      .getStudentByID(this.activatedRoute.snapshot.params['id'])
      .subscribe({
        next: (data) => {
          this.student = data;
        },
      });
  }
}
