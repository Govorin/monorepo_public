import { AfterViewInit, Directive, ElementRef, EventEmitter, inject, Output } from '@angular/core';

@Directive({
  selector: '[ngxRendered]',
  standalone: true,
})
export class RenderedDirective implements AfterViewInit {
  @Output() rendered = new EventEmitter<ElementRef>();
  ref = inject(ElementRef);
  ngAfterViewInit(): void {
    this.rendered.emit(this.ref);
  }
}
