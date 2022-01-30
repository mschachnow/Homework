import { Component, Input } from '@angular/core';
import { Person } from './person';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app-hw';
  @Input() person1: Person = { name: 'Devorah', age: 98 };
}
