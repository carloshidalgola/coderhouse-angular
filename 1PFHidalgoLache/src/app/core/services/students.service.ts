import { Injectable } from '@angular/core';
import { Student } from '../../features/dashboard/students/models/student.model';
import { concatMap, delay, forkJoin, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor(private httpClient: HttpClient) {
    //Concatenar 2 peticiones que se realizan a la vez
    /*
    forkJoin([this.getStudents(), this.getStudents()]).subscribe({
      next: ([resp1, resp2]) => {
        console.log(resp1, resp2);
      },
    });
    */
  }

  getStudentByID(id: string): Observable<Student | undefined> {
    /*return this.getStudents().pipe(
      map((student) => student.find((u) => u.id == id))
    );*/
    return this.httpClient.get<Student>(
      `${environment.apiBaseURL}/students/${id}`
    );
  }

  getStudents(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${environment.apiBaseURL}/students`);
    /*
    return new Observable((observer) => {
      setInterval(() => {
        observer.next(DB);
        observer.complete();
      }, 1000);
    });*/
  }

  createStudent(data: Omit<Student, 'id'>): Observable<Student> {
    return this.httpClient.post<Student>(`${environment.apiBaseURL}/students`, {
      ...data,
      createdAt: new Date().toISOString(),
    });
  }

  updateUserById(id: string, update: Partial<Student>) {
    return this.httpClient
      .patch<Student>(`${environment.apiBaseURL}/students/${id}`, update)
      .pipe(concatMap(() => this.getStudents())); //Inmediatamente después consulto los estudiantes

    /*DB = DB.map((student) =>
      student.id === id ? { ...student, ...update } : student
    );

    return new Observable<Student[]>((observer) => {
      setInterval(() => {
        observer.next(DB);
        observer.complete();
      }, 1000);
    });*/
  }

  removeUserById(id: string): Observable<Student[]> {
    //DB = DB.filter((student) => student.id !== id);
    return this.httpClient
      .delete<Student>(`${environment.apiBaseURL}/students/${id}`) //Elimino el item
      .pipe(concatMap(() => this.getStudents())); //Inmediatamente después consulto los estudiantes
    //return of(DB).pipe(delay(1000));
  }
}

/*
let DB Student[] = [
  {
    id: '1',
    firstName: 'Donald',
    lastName: 'Trump',
    email: 'dt@gmail.com',
    createdAt: '1/1/2024',
  },
  {
    id: '2',
    firstName: 'Will',
    lastName: 'Smith',
    email: 'ws@gmail.com',
    createdAt: '2/1/2024',
  },
  {
    id: '3',
    firstName: 'Harry',
    lastName: 'Potter',
    email: 'hp@gmail.com',
    createdAt: '3/1/2024',
  },
  {
    id: '4',
    firstName: 'Rocky',
    lastName: 'Balboa',
    email: 'rb@gmail.com',
    createdAt: '4/1/2024',
  },
  {
    id: '5',
    firstName: 'John',
    lastName: 'Wick',
    email: 'jw@gmail.com',
    createdAt: '5/1/2024',
  },
  {
    id: '6',
    firstName: 'JF',
    lastName: 'Kenedy',
    email: 'jk@gmail.com',
    createdAt: '6/1/2024',
  },
  {
    id: '7',
    firstName: 'Carlos',
    lastName: 'V',
    email: 'cv@gmail.com',
    createdAt: '7/1/2024',
  },
  {
    id: '8',
    firstName: 'Barack',
    lastName: 'Obama',
    email: 'bo@gmail.com',
    createdAt: '8/1/2024',
  },
  {
    id: '9',
    firstName: 'Keanu',
    lastName: 'Reeves',
    email: 'kr@gmail.com',
    createdAt: '9/1/2024',
  },
  {
    id: '10',
    firstName: 'Michelle',
    lastName: 'Obama',
    email: 'mo@gmail.com',
    createdAt: '10/1/2024',
  },
];*/
