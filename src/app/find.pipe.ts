import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'find'
})
export class FindPipe implements PipeTransform {
  findBlock: string;

  transform(arr: Array<any>, search: string = ''): any {
    if (!search.trim()) {
      return arr;
    }
    if (!arr) { return []; }
    return arr.filter(str => str.fname.toLowerCase().includes(search.toLowerCase()) ||
      str.lname.toLowerCase().includes(search.toLowerCase()) ||
      str.phone.toLowerCase().includes(search.toLowerCase()));
  }
}

