import { Component } from '@angular/core';
import { Person } from './person';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.css']
})
export class personComponent {

    print() {
        console.log(person.name, person.age);
    }
}