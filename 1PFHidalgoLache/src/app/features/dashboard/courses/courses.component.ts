import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { SharedModule } from '../../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list';
import { Course } from '../../../models/Course';
import { MatDialog } from '@angular/material/dialog';
import { CourseDialogComponent } from './course-dialog/course-dialog.component';
import { generarStringRandom } from '../../../shared/utils';
import { CoursesService } from '../../../core/services/courses.service';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [SharedModule, MatTableModule, CommonModule, MatGridListModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
})
export class CoursesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'createdAt', 'actions'];
  dataSource: Course[] = [];
  isLoading = false;

  constructor(
    private matDialog: MatDialog,
    private coursesService: CoursesService
  ) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.isLoading = true;
    this.coursesService.getCourses().subscribe({
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

  openModal(editingCourse?: Course): void {
    this.matDialog
      .open(CourseDialogComponent, {
        data: {
          editingCourse,
        },
      })
      .afterClosed()
      .subscribe({
        next: (result) => {
          console.log('RECIBIMOS', result);

          if (!!result) {
            if (editingCourse) {
              this.onUpdate(editingCourse.id, result);
            } else {
              this.dataSource = [...this.dataSource, result];
            }
          }
        },
      });
  }

  onDelete(id: string): void {
    if (confirm('Are you sure to delete this Course?')) {
      this.isLoading = true;
      this.coursesService.removeCourseById(id).subscribe({
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

  onUpdate(id: string, update: Course): void {
    this.isLoading = true;
    this.coursesService.updateCourseById(id, update).subscribe({
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

  onViewDetail(): void {

  }
}
