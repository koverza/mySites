import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'filterCourse'
})


export class FilterPipe implements PipeTransform {
  transform(courses: any, filterText: string) {
    if (courses.length === 0 || filterText === '') {

      return courses;
    } else {

      return courses.filter((course: { title: string; }) => {

        return course.title.toLowerCase() == filterText.toLowerCase()
      })
    }
  }
}
