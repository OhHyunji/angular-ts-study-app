import { CanDeactivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class UnsavedChangesGuard implements CanDeactivate {
  canDeactivate() {
    return window.confirm("변경사항이 저장되지 않았습니다. 그래도 나가시겠습니까?")
  }
}