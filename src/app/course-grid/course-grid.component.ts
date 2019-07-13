import {Component, OnInit} from '@angular/core';
import CourseServiceClient from '../services/CourseServiceClient';

@Component({
  selector: 'app-course-grid-component',
  templateUrl: './course-grid.component.html',
  styleUrls: ['./course-grid.component.css']
})
export class CourseGridComponent implements OnInit {

  constructor(private courseService: CourseServiceClient) {
  }

  courses = [];
  selectedCourse = {};

  ngOnInit() {
    this.courseService.findAllCourses()
      .then(courses => this.courses = courses);
  }

  selectCourse = (course) => {
    console.log(course);
    this.selectedCourse = course;
  }
}
