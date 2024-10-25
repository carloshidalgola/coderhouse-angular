import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of, throwError } from 'rxjs';
import { generarStringRandom } from '../../shared/utils';
import { User } from '../../features/auth/models/user.models';
import { Router } from '@angular/router';
import { AuthData } from '../../features/auth/models/authData.models';
import { HttpClient } from '@angular/common/http';

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

  constructor(private router: Router, private httpClient: HttpClient) {}

  private handleAuth(user: User[]): User {
    if (!!user[0]) {
      this._authUser$.next(user[0]);
      localStorage.setItem('token', user[0].token);
      return user[0];
    } else {
      throw throwError(() => new Error('Pwd is incorrect'));
    }
  }

  /*login(data: AuthData): Observable<User> {
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
  }*/

  login(data: AuthData): Observable<User> {
    console.log("login");
    return this.httpClient
      .get<User[]>(
        `http://localhost:3000/users/users?email=${data.email}&password=${data.password}`
      )
      .pipe(map((users) => this.handleAuth(users)));
  }

  logout() {
    console.log("login");
    this._authUser$.next(null);
    localStorage.removeItem('token');
    this.router.navigate(['auth', 'login']);
  }

  /*verifyToken(): Observable<boolean> {
    const isValid = localStorage.getItem('token') === FAKE_USER.token;

    if (isValid) {
      this._authUser$.next(FAKE_USER);
    } else {
      this._authUser$.next(null);
    }
    return of(isValid);
  }*/

  verifyToken(): Observable<boolean> {
    return this.httpClient
      .get<User[]>(
        `http://localhost:3000/users/users?token=${localStorage.getItem(
          'token'
        )}`
      )
      .pipe(
        map((users) => {
          const user = this.handleAuth(users);
          return !!user;
        })
      );
  }
}
