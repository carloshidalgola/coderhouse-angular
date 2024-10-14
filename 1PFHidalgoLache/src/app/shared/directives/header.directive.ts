import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHeader]',
  standalone: true,
})
export class HeaderDirective {
  constructor(private el: ElementRef<HTMLElement>) {
    this.applyStyles();
  }

  applyStyles(): void {
    this.el.nativeElement.style.fontSize = '20px';    
  }
}
