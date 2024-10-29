import { Component } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;
  passwordInputType: 'password' | 'text' = 'password';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  togglePasswordInputType(): void {
    if (this.passwordInputType === 'password') {
      this.passwordInputType = 'text';
    } else {
      this.passwordInputType = 'password';
    }
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
    } else {
      //loginFOrm
      this.authService.login(this.loginForm.value).subscribe({
        next: (result) => {
          console.log(result);
          this.router.navigate(['dashboard', 'home']);
        },
        error: (err) => {
          console.error(err);
          if (err instanceof Error) {
            alert(err.message);
          }

          if (err instanceof HttpErrorResponse) {
            if (err.status === 0) {
              alert('No se pudo conectar con el Servicio');
            }

            if (err.status === 500) {
              alert('Ocurrió un error interno en el Servidor');
            }
          }
        },
      });
    }
  }
}
