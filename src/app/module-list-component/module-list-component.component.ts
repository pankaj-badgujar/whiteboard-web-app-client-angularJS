import {Component, OnInit} from '@angular/core';
import ModuleServiceClient from '../services/ModuleServiceClient';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-module-list-component',
  templateUrl: './module-list-component.component.html',
  styleUrls: ['./module-list-component.component.css']
})
export class ModuleListComponentComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private moduleService: ModuleServiceClient) {
  }

  modules = [];
  courseId = '';
  selectedModule = '';

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.courseId = params.courseId);
    this.moduleService.findAllModulesForCourse(this.courseId)
      .then(modules => this.modules = modules);
  }

  selectModule = (module) =>
    this.selectedModule = module
}
