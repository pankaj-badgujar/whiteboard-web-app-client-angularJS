import {Component, OnInit} from '@angular/core';
import LessonServiceClient from '../services/LessonServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-lesson-tabs-component',
  templateUrl: './lesson-tabs.component.html',
  styleUrls: ['./lesson-tabs.component.css']
})
export class LessonTabsComponent implements OnInit {
  lessons = [];
  courseId = '';
  moduleId = '';
  selectedLesson = '';

  constructor(private activatedRoute: ActivatedRoute, private lessonService: LessonServiceClient) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.courseId = params.courseId;
        this.moduleId = params.moduleId;
        this.lessonService.fetchAllLessonsForModule(this.moduleId)
          .then(lessons => this.lessons = lessons);
      }
    );
  }

  selectLesson(lesson) {
    this.selectedLesson = lesson;
  }
}
