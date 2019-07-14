import {Injectable} from '@angular/core';

@Injectable()
export default class CourseServiceClient {
  findAllCourses = () =>
    fetch('http://localhost:8080/api/courses')
      .then(response => response.json())
  findCourseById = (courseId) =>
    fetch(`http://localhost:8080/api/courses/${courseId}`)
      .then(response => response.json())
}
