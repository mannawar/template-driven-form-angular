import { Directive, ElementRef, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[required]'
})
export class MarkAsteriskDirective implements OnInit {

    constructor(private el: ElementRef, private renderer: Renderer2){}

    ngOnInit(): void {
        const parent = this.renderer.parentNode(this.el.nativeElement);
        if(parent.getElementsByTagName('LABEL').length && !parent.getElementByClassName('required-asterisk').length) {
            parent.getElementsByTagName('LABEL')[0].innerHTML += `<span class="required-asterisk">*</span>`
        }
    }

}