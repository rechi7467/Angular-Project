

import { Component, OnInit } from '@angular/core';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-course-list',
  imports: [CommonModule],
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {
  courses: Course[] = [];

  constructor(private courseService: CourseService) {}

  ngOnInit(): void {
    this.loadCourses();
  }

  loadCourses(): void {
    this.courseService.getCourses().subscribe((data: Course[]) => {
      this.courses = data;
    });
  }

  enroll(courseId: number): void {
    this.courseService.enrollCourse(courseId).subscribe(() => {
      this.loadCourses(); // טען את הקורסים מחדש לאחר ההצטרפות
    });
  }

  leave(courseId: number): void {
    this.courseService.leaveCourse(courseId).subscribe(() => {
      this.loadCourses(); // טען את הקורסים מחדש לאחר העזיבה
    });
  }
}
