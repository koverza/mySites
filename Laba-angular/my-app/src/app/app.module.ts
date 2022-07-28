import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponentComponent} from './header/header-component/header-component.component';
import {FooterComponentComponent} from './footer/footer-component/footer-component.component';
import {LogoComponentComponent} from './logo/logo-component/logo-component.component';
import {CoursesComponentComponent} from './courses/courses-component/courses-component.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {FilterPipe} from "./pipes/filter.pipe";
import {OrderByPipe} from "./pipes/orderBy.pipe";
import { LoginPageComponent } from './login-page/login-page.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import {CartService} from "./services/cart.service";
import {CourseGuardService} from "./course-guard.service";
import {UserService} from "./services/user.service";
import {AuthService} from "./services/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    FooterComponentComponent,
    LogoComponentComponent,
    CoursesComponentComponent,
    FilterPipe,
    OrderByPipe,
    LoginPageComponent,
    AddCourseComponent,
    NotFoundPageComponent,
    EditPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CartService, CourseGuardService, UserService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
