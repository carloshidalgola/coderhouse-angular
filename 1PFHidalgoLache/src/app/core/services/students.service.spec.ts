import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { StudentsService } from './students.service';
import { Student } from '../../features/dashboard/students/models/student.model';
import { environment } from '../../../environments/environment.development';

describe('StudentsService', () => {
  let service: StudentsService;
  let httpMock: HttpTestingController;

  const mockStudent: Student = {
    id: '1',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@mail.com',
    createdAt: new Date().toISOString(),
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StudentsService],
    });

    service = TestBed.inject(StudentsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verifica que no haya solicitudes pendientes después de cada prueba
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve a student by ID', () => {
    service.getStudentByID(mockStudent.id).subscribe((student) => {
      expect(student).toEqual(mockStudent);
    });

    const req = httpMock.expectOne(
      `${environment.apiBaseURL}/students/${mockStudent.id}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(mockStudent); // Simulamos la respuesta del servidor con el estudiante de prueba
  });

  it('should retrieve all students', () => {
    const mockStudents: Student[] = [mockStudent];
    service.getStudents().subscribe((students) => {
      expect(students.length).toBe(1);
      expect(students).toEqual(mockStudents);
    });

    const req = httpMock.expectOne(`${environment.apiBaseURL}/students`);
    expect(req.request.method).toBe('GET');
    req.flush(mockStudents); // Simulamos la respuesta del servidor con la lista de estudiantes de prueba
  });

});
