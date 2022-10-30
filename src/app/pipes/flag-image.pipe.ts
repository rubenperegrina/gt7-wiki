import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flagImagePipe',
})
export class FlagImagePipe implements PipeTransform {
  transform(value: string): string {
    let urlImg: string = 'https://flagcdn.com/h24/' + value + '.png';
    return urlImg;
  }
}