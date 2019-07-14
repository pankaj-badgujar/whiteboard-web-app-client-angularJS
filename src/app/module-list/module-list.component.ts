import {Component, OnInit} from '@angular/core';
import ModuleServiceClient from '../services/ModuleServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-module-list-component',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private moduleService: ModuleServiceClient) {
  }

  modules = [];
  courseId = '';
  moduleId = '';

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      params => {
        this.courseId = params.courseId;
        this.moduleId = params.moduleId ;
        this.moduleService.findAllModulesForCourse(this.courseId)
          .then(modules => this.modules = modules);
      }
      );
  }

}
