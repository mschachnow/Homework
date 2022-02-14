import { Component } from '@angular/core';
import { Category } from './sharedItems/category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'itemsApp';

  categories: Category[] = [{
    name: 'computers',
    items: [{
      name: 'Lenovo',
      price: 599
    }, {
      name: 'Dell',
      price: 678
    }]
  }, {
    name: 'phones',
    items: [{
      name: 'Alcatel',
      price: 79
    }, {
      name: 'iphone',
      price: 120
    }]
  }]


  selectedCategory?: Category;
}