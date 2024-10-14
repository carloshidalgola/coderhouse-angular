import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { Student } from '../../../models/Student';
import { MatDialog } from '@angular/material/dialog';
import { StudentDialogComponent } from './student-dialog/student-dialog.component';
import { generarStringRandom } from '../../../shared/utils';

const STUDENT_DATA: Student[] = [
  {
    id: "1",
    firstName: 'Donald',
    lastName: 'Trump',
    email: 'dt@gmail.com',
    createdAt: '1/1/2024',
  },
  {
    id: "2",
    firstName: 'Will',
    lastName: 'Smith',
    email: 'ws@gmail.com',
    createdAt: '2/1/2024',
  },
  {
    id: "3",
    firstName: 'Harry',
    lastName: 'Potter',
    email: 'hp@gmail.com',
    createdAt: '3/1/2024',
  },
  {
    id: "4",
    firstName: 'Rocky',
    lastName: 'Balboa',
    email: 'rb@gmail.com',
    createdAt: '4/1/2024',
  },
  {
    id: "5",
    firstName: 'John',
    lastName: 'Wick',
    email: 'jw@gmail.com',
    createdAt: '5/1/2024',
  },
  {
    id: "6",
    firstName: 'JF',
    lastName: 'Kenedy',
    email: 'jk@gmail.com',
    createdAt: '6/1/2024',
  },
  {
    id: "7",
    firstName: 'Carlos',
    lastName: 'V',
    email: 'cv@gmail.com',
    createdAt: '7/1/2024',
  },
  {
    id: "8",
    firstName: 'Barack',
    lastName: 'Obama',
    email: 'bo@gmail.com',
    createdAt: '8/1/2024',
  },
  {
    id: "9",
    firstName: 'Keanu',
    lastName: 'Reeves',
    email: 'kr@gmail.com',
    createdAt: '9/1/2024',
  },
  {
    id: "10",
    firstName: 'Michelle',
    lastName: 'Obama',
    email: 'mo@gmail.com',
    createdAt: '10/1/2024',
  },
];

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [SharedModule, MatTableModule, CommonModule, MatGridListModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
})
export class StudentsComponent {
  displayedColumns: string[] = ['id', 'name', 'email', 'createdAt', 'actions'];
  dataSource = STUDENT_DATA;

  constructor(private matDialog: MatDialog) {}

  onDelete(id: String): void {
    if (confirm('Are you sure to delete this Student?')) {
      this.dataSource = this.dataSource.filter((student) => student.id !== id);
    }
  }

  openModal(editingStudent?: Student): void {
    this.matDialog
      .open(StudentDialogComponent, {
        data: {
          editingStudent,
        },
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          console.log('RECIBIMOS', result);

          if (!!result) {
            if (editingStudent) {
              //EDIT
              this.dataSource = this.dataSource.map((student) =>
                student.id === editingStudent.id ? { ...student, ...result,} : student
              );
            } else {
              this.dataSource = [...this.dataSource, result];
            }
          }
        },
      });
  }
}
