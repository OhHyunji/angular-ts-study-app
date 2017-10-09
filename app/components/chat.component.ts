import { Component } from '@angular/core';

@Component({
  selector: 'chat',
  template: `
    <div class="chat">
      <h1>Chat Component</h1>
      <input type="text" placeholder="Let's Chatting!"/>
    </div>
  `,
  styles: [ '.chat {background: cyan; height: 80px; width: 30%; float: left; display: block; box-sizing: border-box;}' ]
})

export class ChatComponent {
}