import { Component, Inject } from '@angular/core';
import { SharedModule } from '../../../../shared/shared.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { generarStringRandom } from '../../../../shared/utils';
import { Student } from '../models/student.model';

interface StudentDialogData {
  editingStudent?: Student;
}

@Component({
  selector: 'app-student-dialog',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './student-dialog.component.html',
  styleUrl: './student-dialog.component.scss',
})
export class StudentDialogComponent {
  userForm: FormGroup;

  constructor(
    private matDialogRef: MatDialogRef<StudentDialogComponent>,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data?: StudentDialogData
  ) {
    console.log(data);

    this.userForm = this.formBuilder.group({
      firstName: [null, [Validators.required]],
      lastName: [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
    });

    this.patchFormValue();
  }

  patchFormValue() {
    if (this.data?.editingStudent) {
      this.userForm.patchValue(this.data?.editingStudent);
    }
  }

  private get isEditing() {
    return !!this.data?.editingStudent;
  }

  onSave(): void {
    if (this.userForm.invalid) {
      this.userForm.markAllAsTouched();
    } else {
      this.matDialogRef.close({
        ...this.userForm.value, //Enviamos los 3 campos del form: firstName, lastName e email
        id: this.isEditing
          ? this.data!.editingStudent!.id
          : generarStringRandom(4),
        createdAt: this.isEditing
        ? this.data!.editingStudent!.createdAt 
        : new Date(),
      });
    }
  }
}
