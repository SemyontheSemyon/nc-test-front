import {Pipe, PipeTransform} from '@angular/core';
import {UserTest} from '../dto/user-test';

@Pipe({
  name: 'searchBox'
})
export class SearchBoxPipe implements PipeTransform {

  transform(items: UserTest[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.email.toLowerCase().includes(searchText);
    });
  }


}
