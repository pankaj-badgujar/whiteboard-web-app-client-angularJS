import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {FormsModule} from '@angular/forms';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import CourseServiceClient from './services/CourseServiceClient';
import {CourseGridComponent} from './course-grid/course-grid.component';
import {ModuleListComponent} from './module-list/module-list.component';
import {LessonTabsComponent} from './lesson-tabs/lesson-tabs.component';
import {TopicPillsComponent} from './topic-pills/topic-pills.component';
import {WidgetListComponent} from './widget-list/widget-list.component';
import ModuleServiceClient from './services/ModuleServiceClient';
import LessonServiceClient from './services/LessonServiceClient';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';
import TopicServiceClient from './services/TopicServiceClient';
import WidgetServiceClient from './services/WidgetServiceClient';

import {HeadingWidgetComponent} from './heading-widget/heading-widget.component';
import {ParagraphWidgetComponent} from './paragraph-widget/paragraph-widget.component';
import {ListWidgetComponent} from './list-widget/list-widget.component';
import {LinkWidgetComponent} from './link-widget/link-widget.component';
import {ImageWidgetComponent} from './image-widget/image-widget.component';
import {YoutubeWidgetComponent} from './youtube-widget/youtube-widget.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
      RegisterComponent,
    ProfileComponent,
    CourseGridComponent,
    ModuleListComponent,
    LessonTabsComponent,
    TopicPillsComponent,
    WidgetListComponent,
    CourseViewerComponent,
    HeadingWidgetComponent,
    ParagraphWidgetComponent,
    ListWidgetComponent,
    LinkWidgetComponent,
    ImageWidgetComponent,
    YoutubeWidgetComponent
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
export class AppModule {
}
