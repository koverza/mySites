import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CartService} from "../../cart.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {ICourses} from "../../courses.interface";

@Component({
  selector: 'app-courses-component',
  templateUrl: './courses-component.component.html',
  styleUrls: ['./courses-component.component.css'],

  // changeDetection: ChangeDetectionStrategy.OnPush
})


export class CoursesComponentComponent implements OnInit {

  public courseList$: Observable<ICourses[]> = this.cartService.courseList$

  newCourse: any
  filterText: string = '';
  myDate = new Date();
  addCourse: boolean | undefined


  constructor(private cartService: CartService, private route: ActivatedRoute, private router: Router) {

  }


  onEditClick(id) {
    this.router.navigate(['/Courses/edit', id])
  }

  onRemoveClick(id: number, index: number) {
    return this.cartService.deleteCourse(id, index)
  }

  onAddClick() {


  }

  // onSaveNewCourseClick() {
  //   this.courses = this.cartService.addCourse(this.title, this.description, this.duration, this.creationDate)
  //   this.addCourse = false
  // }

  dataFromRoute = history.state.data

  onCancelNewCourseClick() {
    this.addCourse = false
  }

  ngOnInit(): void {

    // this.cartService.courseList$.subscribe(arr => {
    //   this.courseList$ = arr
    // })


    // this.courses = this.cartService.addCourse(history.state.data)
    // this.courses = this.courses.filter(course => course.title.length > 0)

    // this.route.queryParams.subscribe((params: any) => {
    //   // console.log(params)
    //   this.newCourse = params
    //   console.log(this.courses)
    //
    //
    // })


  }

}
