import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { generarStringRandom } from '../../shared/utils';
import { AuthData } from '../../features/auth/models/AuthData.models';
import { User } from '../../features/auth/models/user.models';
import { Router } from '@angular/router';

const FAKE_USER: User = {
  email: 'admin@mail.com',
  firstName: 'admin',
  lastName: 'admin',
  id: generarStringRandom(4),
  createdAt: new Date(),
  password: '123456',
  token: 'abcdefghlkasjdlasjdlsakjdlsakjdlsad123456',
};

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _authUser$ = new BehaviorSubject<null | User>(null);
  public authUser$ = this._authUser$.asObservable();

  constructor(private router: Router) {}

  login(data: AuthData): Observable<User> {
    if (data.email != FAKE_USER.email) {
      return throwError(() => {
        new Error('Email is incorrect');
      });
    }

    if (data.password != FAKE_USER.password) {
      return throwError(() => {
        new Error('Pwd is incorrect');
      });
    }

    this._authUser$.next(FAKE_USER);

    localStorage.setItem('token', FAKE_USER.token);
    return of(FAKE_USER);
  }

  logout() {
    this._authUser$.next(null);
    this.router.navigate(['auth', 'login']);
    localStorage.removeItem('token');
  }

  verifyToken(): Observable<boolean> {
    const isValid = localStorage.getItem('token') === FAKE_USER.token;
    
    if(isValid){
      this._authUser$.next(FAKE_USER);
    }else{
      this._authUser$.next(null);
    }
    return of(isValid);
  }
}
