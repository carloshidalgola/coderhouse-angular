import { Injectable } from '@angular/core';
import { Student } from '../../models/Student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  constructor() {}

  getStudents(): Observable<Student[]> {
    return new Observable((observer) => {
      setInterval(() => {
        observer.next(DB);
        observer.complete();
      }, 3000);
    });
  }

  updateUserById(id: string, update: Partial<Student>){
    
  }
}

const DB: Student[] = [
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
];
