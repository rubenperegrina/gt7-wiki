import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'brandLogoPipe',
})
export class BrandLogoPipe implements PipeTransform {
  transform(value: string): string {
    let urlImg: string = 'https://raw.githubusercontent.com/filippofilip95/car-logos-dataset/master/logos/thumb/' + value.replace(/ /g,"-") + '.png';
    return urlImg;
  }
}