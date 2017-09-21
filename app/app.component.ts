import {Component} from '@angular/core';

@Component({
    selector: 'app',
    template: `<h1>hello {{ name }}</h1>`
})
export class AppComponent {
    name: string;

    constructor() {
        this.name = 'awesome';
    }
}