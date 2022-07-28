import {Component, OnInit} from '@angular/core';
import {CartService} from "../services/cart.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

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

  onCancelNewCourseClick() {
    this.route.navigate(['/courses'])
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      id: new FormControl(Math.random()),
      title: new FormControl(null, Validators.required),
      topRated: new FormControl(false),
      description: new FormControl(null, Validators.required),
      duration: new FormControl(null, Validators.required),
      creationDate: new FormControl(new Date(), Validators.required),
    })
  }

  navToCourses() {
    this.cartService.addCourse(this.reactiveForm.value);
    this.route.navigate(['/courses'])
  }




}
