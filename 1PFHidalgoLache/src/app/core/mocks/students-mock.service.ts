import { delay, map, Observable, of } from "rxjs";

export class StudentsMockService {
  constructor() {}
 
  getStudentByID(id: string): Observable<Student | undefined > {
    return this.getStudents().pipe(
      map((student) => student.find((u) => u.id == id))
    );
  }
  
  getStudents(): Observable<Student[]> {
    return new Observable((observer) => {
      setInterval(() => {
        observer.next(DB);
        observer.complete();
      }, 1000);
    });
  }

  updateUserById(id: string, update: Partial<Student>) {
    DB = DB.map((student) =>
      student.id === id ? { ...student, ...update } : student
    );

    return new Observable<Student[]>((observer) => {
      setInterval(() => {
        observer.next(DB);
        observer.complete();
      }, 1000);
    });
  }

  removeUserById(id: string): Observable<Student[]> {
    DB = DB.filter((student) => student.id !== id);

    return of(DB).pipe(delay(1000));
  }
}

export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
}

/*const MY_PRODUCTS_DB: Product[] = [
  {
    id: 1,
    name: 'PS5 false',
  },
  {
    id: 2,
    name: 'PS GAMER false',
  },
  {
    id: 3,
    name: 'PS DEVELOPER false',
  },
];*/


let DB: Student[] = [
  {
    id: '1',
    firstName: 'Donald',
    lastName: 'Trump Fake',
    email: 'dt@gmail.com',
    createdAt: '1/1/2024',
  },
  {
    id: '2',
    firstName: 'Will',
    lastName: 'Smith Fake',
    email: 'ws@gmail.com',
    createdAt: '2/1/2024',
  },
  {
    id: '3',
    firstName: 'Harry',
    lastName: 'Potter Fake',
    email: 'hp@gmail.com',
    createdAt: '3/1/2024',
  },
  {
    id: '4',
    firstName: 'Rocky',
    lastName: 'Balboa Fake',
    email: 'rb@gmail.com',
    createdAt: '4/1/2024',
  }
];
