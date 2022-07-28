import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'orderBy'
})

export class OrderByPipe implements PipeTransform {
  transform(courses: any, filterText: string) {
    if (courses.length === 0 || filterText === '') {

      return courses
        .sort(
        (objA: { creationDate: { getTime: () => number; }; },
         objB: { creationDate: { getTime: () => number; }; }) => objB.creationDate.getTime() - objA.creationDate.getTime(),
      );
    }
  }
}

