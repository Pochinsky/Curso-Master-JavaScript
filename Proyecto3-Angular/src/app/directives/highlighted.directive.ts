import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlighted]'
})
export class HighlightedDirective {

    constructor(el: ElementRef) {
        el.nativeElement.style.color = "rgb(53, 103, 164)";
        el.nativeElement.style.textAlign = "center";
        el.nativeElement.style.fontWeight = "700";
    }

}
