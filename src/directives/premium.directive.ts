import { Directive, Component, ElementRef } from '@angular/core';
import { UserService } from '../app/services/user.service';

@Directive({
  selector: '[premium]'
})
export class PremiumDirective {
  el: HTMLElement;

  constructor(elementRef?: ElementRef) {
    if (!elementRef) return;

    this.el = elementRef.nativeElement as HTMLInputElement;
    this.el.onclick = () => alert('You need plus to use this.');
  }
}
