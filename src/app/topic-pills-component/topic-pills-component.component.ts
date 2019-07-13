import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import TopicServiceClient from '../services/TopicServiceClient';

@Component({
  selector: 'app-topic-pills-component',
  templateUrl: './topic-pills-component.component.html',
  styleUrls: ['./topic-pills-component.component.css']
})
export class TopicPillsComponentComponent implements OnInit {

  topics = [];
  courseId = '';
  moduleId = '';
  lessonId = '';
  selectedTopic = '';
  constructor(private activatedRoute: ActivatedRoute, private topicService: TopicServiceClient) {
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.courseId = params.courseId;
        this.moduleId = params.moduleId;
        this.lessonId = params.lessonId;
        this.topicService.findAllTopicsForLesson(this.lessonId)
          .then(topics => this.topics = topics);
      }
    );
  }

  selectTopic(topic) {
    this.selectedTopic = topic;
  }
}
