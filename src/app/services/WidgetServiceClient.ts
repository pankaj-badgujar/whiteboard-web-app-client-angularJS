import {Injectable} from '@angular/core';

@Injectable()
export default class WidgetServiceClient {
  findAllWidgetsForTopic = (topicId) =>
    fetch(`http://localhost:8080/api/topics/${topicId}/widgets`)
      .then(response => response.json())
  findWidgetById = (widgetId) =>
    fetch(`http://localhost:8080/api/widgets/${widgetId}`)
      .then(response => response.json())
}
