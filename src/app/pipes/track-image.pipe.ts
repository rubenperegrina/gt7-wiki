import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trackImagePipe',
  standalone: true
})
export class TrackImagePipe implements PipeTransform {
  transform(value: string): string {
    let urlImg: string = 'assets/' + value;
    return urlImg;
  }
}