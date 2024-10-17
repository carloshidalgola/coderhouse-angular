import { Component, Inject } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { generarStringRandom } from '../../../../shared/utils';
import { Course } from '../models/course.model';

interface CourseDialogData {
  editingCourse?: Course;
}

@Component({
  selector: 'app-course-dialog',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './course-dialog.component.html',
  styleUrl: './course-dialog.component.scss',
})
export class CourseDialogComponent {
  userForm: FormGroup;

  constructor(
    private matDialogRef: MatDialogRef<CourseDialogComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data?: CourseDialogData
  ) {
    console.log(data);

    this.userForm = this.formBuilder.group({
      name: [null, [Validators.required]]      
    });

    this.patchFormValue();
  }

  patchFormValue() {
    if (this.data?.editingCourse) {
      this.userForm.patchValue(this.data?.editingCourse);
    }
  }

  private get isEditing() {
    return !!this.data?.editingCourse;
  }

  onSave(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
    } else {
      this.matDialogRef.close({
        ...this.userForm.value, //Enviamos los 3 campos del form: firstName, lastName e email
        id: this.isEditing
          ? this.data!.editingCourse!.id
          : generarStringRandom(4),
        createdAt: this.isEditing
        ? this.data!.editingCourse!.createdAt 
        : new Date(),
      });
    }
  }
}
