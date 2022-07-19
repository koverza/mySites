import {Component, OnInit} from '@angular/core';
import {CartService} from "../cart.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup,  Validators} from "@angular/forms";

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css'],

})
export class AddCourseComponent implements OnInit {
  reactiveForm: FormGroup;

  public coursesList: any = []

  constructor(private cartService: CartService, private route: Router) {

  }


  onSaveNewCourseClick() {


  }

  onCancelNewCourseClick() {

  }


  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      id: new FormControl(Math.random()),
      title: new FormControl(null,  Validators.required),
      topRated: new FormControl(false),
      description: new FormControl(null, Validators.required),
      duration: new FormControl(null,  Validators.required),
      creationDate: new FormControl(new Date()),
    })

    this.cartService.courseList$.subscribe(arr => {
      this.coursesList = arr
    })


  }

  navToCourses() {
    this.cartService.addCourse( this.reactiveForm.value);
    this.route.navigate(['/Courses'],
      {state: {data: this.reactiveForm.value }})
  }


  onSubmit() {
    console.log(this.reactiveForm)
  }

}
