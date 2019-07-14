import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import TopicServiceClient from '../services/TopicServiceClient';

@Component({
  selector: 'app-topic-pills-component',
  templateUrl: './topic-pills.component.html',
  styleUrls: ['./topic-pills.component.css']
})
export class TopicPillsComponent implements OnInit {

  topics = [];
  courseId = '';
  moduleId = '';
  lessonId = '';
  topicId = '';

  constructor(private activatedRoute: ActivatedRoute, private topicService: TopicServiceClient) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.courseId = params.courseId;
        this.moduleId = params.moduleId;
        this.lessonId = params.lessonId;
        this.topicId = params.topicId;
        this.topicService.findAllTopicsForLesson(this.lessonId)
          .then(topics => this.topics = topics);
      }
    );
  }
}
