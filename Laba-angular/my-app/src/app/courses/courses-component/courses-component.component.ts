import {ChangeDetectionStrategy, Component, forwardRef, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";
import {ICourses} from "../../interfaces/courses.interface";
import {NG_VALUE_ACCESSOR} from "@angular/forms";

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



  constructor(private cartService: CartService, private route: ActivatedRoute, private router: Router) {

  }


  onEditClick(id) {
    this.router.navigate(['/courses/edit', id])
  }

  onRemoveClick(id: number, index: number) {
    return this.cartService.deleteCourse(id, index)
  }








  ngOnInit(): void {
    this.cartService.orderCoursesByDuration()
  }

}
