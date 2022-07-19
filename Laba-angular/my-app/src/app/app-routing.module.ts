import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {CoursesComponentComponent} from "./courses/courses-component/courses-component.component";
import {NotFoundPageComponent} from "./not-found-page/not-found-page.component";
import {AddCourseComponent} from "./add-course/add-course.component";
import {EditPageComponent} from "./edit-page/edit-page.component";
import {CourseGuardService} from "./course-guard.service";

const routes: Routes = [
  {path: 'Login', component: LoginPageComponent},
  {path: 'Courses', component: CoursesComponentComponent, canActivate: [CourseGuardService]},
  {path: 'Courses/new', component: AddCourseComponent},
  {path: 'Courses/edit/:id', component: EditPageComponent},
  {path: '**', component: NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
