import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDatePipe',
})
export class FormatDatePipe implements PipeTransform {
  transform(value: string): string {
    const [year, month, day] = value.split('-');
    return [day, month, year].join('/');
  }
}