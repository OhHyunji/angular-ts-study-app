import { Component } from '@angular/core';

@Component({
  selector: 'home',
  template: `
    <div class="home">
      <h1>Home Component</h1>
      <input type="text" placeholder="Let's Typing!"/>
    </div>
  `,
  styles: [ '.home {background: red; height: 80px; width: 70%; float: left; box-sizing: border-box;}' ]
})

export class HomeComponent {
}