import { Injectable } from '@angular/core';
import { Course } from '../../models/Course';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  constructor() {}

  getCourses(): Observable<Course[]> {
    return new Observable((observer) => {
      setInterval(() => {
        observer.next(DB);
        observer.complete();
      }, 3000);
    });
  }

  updateCourseById(id: string, update: Partial<Course>) {
    DB = DB.map((course) =>
      course.id === id ? { ...course, ...update } : course
    );

    return new Observable<Course[]>((observer) => {
      setInterval(() => {
        observer.next(DB);
        observer.complete();
      }, 1000);
    });
  }

  removeCourseById(id: string): Observable<Course[]> {
    DB = DB.filter((course) => course.id !== id);

    return of(DB).pipe(delay(1000));
  }
}

let DB: Course[] = [
  {
    id: '1',
    name: 'Maths',
    createdAt: '1/1/2024',
  },
  {
    id: '2',
    name: 'Geometric',
    createdAt: '2/1/2024',
  },
  {
    id: '3',
    name: 'Language',
    createdAt: '3/1/2024',
  },
  {
    id: '4',
    name: 'English',
    createdAt: '4/1/2024',
  },
  {
    id: '5',
    name: 'Aritmetics',
    createdAt: '5/1/2024',
  },
  {
    id: '6',
    name: 'Chemical',
    createdAt: '6/1/2024',
  },
  {
    id: '7',
    name: 'Sports Education',
    createdAt: '7/1/2024',
  },
  {
    id: '8',
    name: 'Religion',
    createdAt: '8/1/2024',
  },
  {
    id: '9',
    name: 'French',
    createdAt: '9/1/2024',
  },
  {
    id: '10',
    name: 'Spanish',
    createdAt: '10/1/2024',
  },
];
