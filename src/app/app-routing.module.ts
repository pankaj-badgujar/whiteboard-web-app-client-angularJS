import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {ProfileComponent} from './profile/profile.component';
import {CourseGridComponent} from './course-grid/course-grid.component';
import {CourseViewerComponent} from './course-viewer/course-viewer.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'profile/:id', component: ProfileComponent},
  {path: 'course', component: CourseGridComponent},
  {path: 'course/:courseId', component: CourseViewerComponent},
  {path: 'course/:courseId/module/:moduleId', component: CourseViewerComponent},
  {path: 'course/:courseId/module/:moduleId/lesson/:lessonId', component: CourseViewerComponent},
  {path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId', component: CourseViewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
