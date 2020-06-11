import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPriority',
  pure: false
})
export class SortPriorityPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    if (typeof args[0] === "undefined") {
            return value;
    }
    let direction = args[0][0];
    let column = args.replace('-','');
    if(value){
    value.sort((a: any, b: any) => {
            let left = Number(a[column]);
            let right = Number(b[column]);
            return (direction === "-") ? right - left : left - right;
    });
    return value;
  }
}

}