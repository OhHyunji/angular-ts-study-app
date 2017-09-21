import {Component} from '@angular/core';

@Component({
    selector: 'sample',
    template: `<h1>hello {{ name }}</h1>`
})
export class SampleComponent {
    name: string;

    constructor() {
        this.name = 'awesome';
    }
}