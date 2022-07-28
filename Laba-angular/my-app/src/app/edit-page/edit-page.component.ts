import {Component, OnInit} from '@angular/core';
import {CartService} from "../services/cart.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-page',
  templateUrl: './edit-page.component.html',
  styleUrls: ['./edit-page.component.css']
})
export class EditPageComponent implements OnInit {
  course: any;
  courseId: any;

  reactiveForm: FormGroup;
  constructor(private activatedRoute: ActivatedRoute, private cartService: CartService, private router: Router) {
  }

  ngOnInit(): void {

    this.courseId = this.activatedRoute.snapshot.paramMap.get('id');
    this.course = this.cartService.getCourseById(this.courseId)

    this.reactiveForm = new FormGroup({
      id: new FormControl(Math.random()),
      title: new FormControl(this.course.title,  Validators.required),
      topRated: new FormControl(false),
      description: new FormControl(this.course.description, Validators.required),
      duration: new FormControl(this.course.duration,  Validators.required),
      creationDate: new FormControl(this.course.creationDate, Validators.required )
    })

  }


  onCancelNewCourseClick() {

  }

  onSubmit() {
    console.log(this.reactiveForm)
  }

  submitEdit() {
    this.cartService.editCourse( this.courseId, this.reactiveForm.value)
    this.router.navigate([ "../../"], { relativeTo: this.activatedRoute } )

  }

}
