import { BrowserModule } from '@angular/platform-browser';
import {Injectable, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {FormsModule} from '@angular/forms';
import { TodoListComponent } from './todo-list/todo-list.component';
import { WhiteBoardComponent } from './white-board/white-board.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { ColumnNavigatorComponent } from './column-navigator/column-navigator.component';
import CourseServiceClient from './services/CourseServiceClient';
import { CourseGridComponentComponent } from './course-grid-component/course-grid-component.component';
import { ModuleListComponentComponent } from './module-list-component/module-list-component.component';
import { LessonTabsComponentComponent } from './lesson-tabs-component/lesson-tabs-component.component';
import { TopicPillsComponentComponent } from './topic-pills-component/topic-pills-component.component';
import { WidgetListComponentComponent } from './widget-list-component/widget-list-component.component';
import ModuleServiceClient from './services/ModuleServiceClient';
import LessonServiceClient from './services/LessonServiceClient';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import TopicServiceClient from './services/TopicServiceClient';
import WidgetServiceClient from './services/WidgetServiceClient';
import { HeadingWidgetComponent } from './heading-widget/heading-widget.component';
import { ParagraphWidgetComponent } from './paragraph-widget/paragraph-widget.component';
import { ListWidgetComponent } from './list-widget/list-widget.component';
import { LinkWidgetComponent } from './link-widget/link-widget.component';
import { ImageWidgetComponent } from './image-widget/image-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TodoListComponent,
    WhiteBoardComponent,
    RegisterComponent,
    ProfileComponent,
    ColumnNavigatorComponent,
    CourseGridComponentComponent,
    ModuleListComponentComponent,
    LessonTabsComponentComponent,
    TopicPillsComponentComponent,
    WidgetListComponentComponent,
    CourseViewerComponent,
    HeadingWidgetComponent,
    ParagraphWidgetComponent,
    ListWidgetComponent,
    LinkWidgetComponent,
    ImageWidgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CourseServiceClient,
    ModuleServiceClient,
    LessonServiceClient,
    TopicServiceClient,
    WidgetServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
