
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private apiUrl = '/api/courses'; // כתובת ה-API שלך

  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.apiUrl);
  }

  enrollCourse(courseId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/enroll`, { courseId });
  }

  leaveCourse(courseId: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/leave`, { courseId });
  }
}
