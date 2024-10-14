import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userFullName',
  standalone: true
})
export class UserFullNamePipe implements PipeTransform {
  transform(value:any, transform?: 'uppercase'): string {
    const result = value.firstName + ' ' + value.lastName;
    if (transform === 'uppercase') {
      return `${result}`.toUpperCase();
    }

    return result;
  }

}
