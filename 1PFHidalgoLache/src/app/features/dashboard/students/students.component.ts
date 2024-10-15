import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { Student } from '../../../models/Student';
import { MatDialog } from '@angular/material/dialog';
import { StudentDialogComponent } from './student-dialog/student-dialog.component';
import { generarStringRandom } from '../../../shared/utils';
import { StudentsService } from '../../../core/services/students.service';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [SharedModule, MatTableModule, CommonModule, MatGridListModule],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
})
export class StudentsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'createdAt', 'actions'];
  dataSource: Student[] = [];
  isLoading = false;

  constructor(
    private matDialog: MatDialog,
    private studentService: StudentsService
  ) {}

  ngOnInit(): void {
    this.loadStudents();
  }

  loadStudents(): void {
    this.isLoading = true;
    this.studentService.getStudents().subscribe({
      next: (data) => {
        this.dataSource = data;
      },
      error: () => {
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
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
              this.onUpdate(editingStudent.id, result);
            } else {
              this.dataSource = [...this.dataSource, result];
            }
          }
        },
      });
  }

  onDelete(id: string): void {
    if (confirm('Are you sure to delete this Student?')) {
      this.isLoading = true;
      this.studentService.removeUserById(id).subscribe({
        next: (data) => {
          this.dataSource = data;
        },
        error: (err) => {
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        },
      });
    }
  }

  onUpdate(id: string, update: Student): void {
    this.isLoading = true;
    this.studentService.updateUserById(id, update).subscribe({
      next: (data) => {
        this.dataSource = data;
      },
      error: () => {
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      },
    });
  }
}
