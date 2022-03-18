import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'provinceNameTransformer'
})
export class ProvinceNameTransformerPipe implements PipeTransform {

  transform(value: string): string {
    return value.includes('/') ? value.split('/').pop() : value
  }

}
