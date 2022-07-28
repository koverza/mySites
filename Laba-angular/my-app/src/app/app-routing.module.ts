import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./login-page/login-page.component";
import {CoursesComponentComponent} from "./courses/courses-component/courses-component.component";
import {NotFoundPageComponent} from "./not-found-page/not-found-page.component";
import {AddCourseComponent} from "./add-course/add-course.component";
import {EditPageComponent} from "./edit-page/edit-page.component";
import {CourseGuardService} from "./course-guard.service";

const routes: Routes = [
  {path: 'login', component: LoginPageComponent},
  {path: 'courses', component: CoursesComponentComponent, canActivate: [CourseGuardService]},
  {path: 'courses/new', component: AddCourseComponent},
  {path: 'courses/edit/:id', component: EditPageComponent},
  { path: '**', redirectTo: 'login' }
  // {path: '**', component: NotFoundPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
