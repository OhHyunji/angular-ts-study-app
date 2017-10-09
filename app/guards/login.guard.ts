import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginGuard implements CanActivate {
  private checkLoggedIn(): boolean {
    //지금은 임의로 true 또는 false return
    let loggedIn: boolean = Math.random() < 0.5;
    console.log('LoginGuard::LoggedIn::' + loggedIn);

    return loggedIn;
  }

  canActivate() {
    return this.checkLoggedIn();
  }
}