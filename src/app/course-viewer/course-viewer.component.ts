import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import CourseServiceClient from '../services/CourseServiceClient';

@Component({
  selector: 'app-course-viewer',
  templateUrl: './course-viewer.component.html',
  styleUrls: ['./course-viewer.component.css']
})
export class CourseViewerComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private courseService: CourseServiceClient) {
  }
  courseId = '';
  selectedCourse = '';

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.courseId = params.courseId;
        this.courseService.findCourseById(this.courseId)
          .then(course => this.selectedCourse = course);
      }
    );
  }

}
