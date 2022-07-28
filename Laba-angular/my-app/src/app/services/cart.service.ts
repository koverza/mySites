import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {ICourses} from "../interfaces/courses.interface";


@Injectable({
  providedIn: 'root'
})
export class CartService {

  private courseListSubject$: BehaviorSubject<ICourses[]>
  public courseList$: Observable<ICourses[]>

  constructor() {
    this.courseListSubject$ = new BehaviorSubject<ICourses[]>([{
      id: 0,
      title: 'React',
      topRated: true,
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, aut corporis dolores doloribus eaque\n' +
        '      expedita\n' +
        '      explicabo harum ipsum, modi molestiae tenetur ut vel veniam voluptas voluptatem. Laudantium libero magni\n' +
        '      temporibus.',
      duration: 120,
      creationDate: new Date(1988, 3, 15),
    },
      {
        id: 1,
        title: 'Angular',
        topRated: true,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, aut corporis dolores doloribus eaque\n' +
          '      expedita\n' +
          '      explicabo harum ipsum, modi molestiae tenetur ut vel veniam voluptas voluptatem. Laudantium libero magni\n' +
          '      temporibus.',
        duration: 100,
        creationDate: new Date(2028, 3, 15),
      },
      {
        id: 2,
        title: 'Vue',
        topRated: false,
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, aut corporis dolores doloribus eaque\n' +
          '      expedita\n' +
          '      explicabo harum ipsum, modi molestiae tenetur ut vel veniam voluptas voluptatem. Laudantium libero magni\n' +
          '      temporibus.',
        duration: 180,
        creationDate: new Date(1918, 3, 15),
      }
    ])
    this.courseList$ = this.courseListSubject$.asObservable()


  }


  get courses(): ICourses[] {
    return this.courseListSubject$.value
  }

  public orderCoursesByDuration() {
    this.courses.sort(
      (objA: { creationDate: { getTime: () => number; }; },
       objB: { creationDate: { getTime: () => number; }; }) => objB.creationDate.getTime() - objA.creationDate.getTime(),
    );
  }

  // public getCourseBySearch (text: string) {
  //   return this.courses.filter(x => x.title.toLowerCase() == text.toLowerCase())
  // }

  public getCourseById(id: number): ICourses {
    return this.courses.find(x => x.id == id)
  }

  public editCourse(id: number, value) {
    let actualCourse = this.getCourseById(id)
    let index = this.courses.indexOf(actualCourse);
    this.courses[index] = value;
  }

  public addCourse(newCourse: any) {
    this.courseListSubject$.next([...this.courses, newCourse])
  }

  public deleteCourse(id: number, index: number): Array<any> {
    let result = window.confirm('Are you sure want to delete this?');
    if (result) {
      return this.courses.splice(index, 1)

    } else {
      return this.courses
    }
  }


}
