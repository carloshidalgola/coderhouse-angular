import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginComponent, HttpClientTestingModule, BrowserAnimationsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize the login form with empty values', () => {
    expect(component.loginForm.get('email')?.value).toBe('');
    expect(component.loginForm.get('password')?.value).toBe('');
  });

  it('El email debe ser requerido', () => {
    const emailControl = component.loginForm.get('email');
    emailControl?.setValue('');
    expect(emailControl?.hasError('required')).toBeTrue();
  });

  it('Al llamar onSubmit, si el form es invalido, debe marcar los campos como touched', () => {
    component.loginForm.setValue({
      email: '',
      password: '',
    });

    const spyOnMarkAllAsTouched = spyOn(
      component.loginForm,
      'markAllAsTouched'
    );

    component.onSubmit();

    expect(spyOnMarkAllAsTouched).toHaveBeenCalledTimes(1);
  });

  it('Al llamar onSubmit debe llamar a login de AuthService', () => {
    component.loginForm.setValue({
      email: 'fake@mail.com',
      password: '123456',
    });

    const spyOnLogin = spyOn(component, 'onSubmit');

    component.onSubmit();

    expect(spyOnLogin).toHaveBeenCalled();
  });

  it('El toggle de input type del campo password debe alternar entre password y text', () => {
    component.passwordInputType = 'password';
    component.togglePasswordInputType();

    expect(component.passwordInputType).toBe('text');

    component.passwordInputType = 'text';
    component.togglePasswordInputType();
    expect(component.passwordInputType).toBe('password');
  });
});

