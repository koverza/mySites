import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'filterCourse'
})

export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter(it => {
      return it.title.toLocaleLowerCase().includes(searchText);
    });
  }
}

// export class FilterPipe implements PipeTransform {
//   transform(courses: any , filterText: string) {
//     if (courses.length === 0 || filterText === '') {
//
//       return courses;
//     } else {
//
//       return courses.filter((course: { title: string; }) => {
//
//         return course.title.toLowerCase() == filterText.toLowerCase()
//       })
//     }
//   }
// }
