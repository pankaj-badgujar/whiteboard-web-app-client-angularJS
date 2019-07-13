import {Injectable} from '@angular/core';

@Injectable()
export default class ModuleServiceClient {
  findAllModules = () =>
    fetch('http://localhost:8080/api/modules')
      .then(response => response.json)
  findAllModulesForCourse = (courseId) =>
    fetch(`http://localhost:8080/api/courses/${courseId}/modules`)
      .then(response => response.json())
}
