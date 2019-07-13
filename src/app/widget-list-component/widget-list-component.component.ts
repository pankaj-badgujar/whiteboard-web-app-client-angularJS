import { Component, OnInit } from '@angular/core';
import WidgetServiceClient from '../services/WidgetServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-widget-list-component',
  templateUrl: './widget-list-component.component.html',
  styleUrls: ['./widget-list-component.component.css']
})
export class WidgetListComponentComponent implements OnInit {
  widgets = [];
  courseId = '';
  moduleId = '';
  lessonId = '';
  topicId = '';
  constructor(private activatedRoute: ActivatedRoute, private widgetService: WidgetServiceClient) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.courseId = params.courseId;
        this.moduleId = params.moduleId;
        this.lessonId = params.lessonId;
        this.topicId = params.topicId;
        this.widgetService.findAllWidgetsForTopic(this.topicId)
          .then(widgets => this.widgets = widgets);
      }
      );
  }

}
