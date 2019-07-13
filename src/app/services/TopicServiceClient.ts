import {Injectable} from '@angular/core';

@Injectable()
export default class TopicServiceClient {
  findAllTopicsForLesson = (lessonId) =>
    fetch(`http://localhost:8080/api/lessons/${lessonId}/topics`)
      .then(response => response.json())
}
