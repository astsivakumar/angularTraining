import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

//-- host listener
//<div appHighlight /> example of attribute directive usage
// no view , no style
// where we place the directive is called "host element"

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private hostElement: ElementRef,
              private renderer : Renderer2) { 
    console.log(" HighlightDirective created ");
  };

  @HostListener ('click')
    onclick(){
      console.log(" Directive  holst listerner and ");
    }

    @HostListener('mouseenter')
    onEnter(){
      // console.log(" Directive  holst listerner onEnter ");
      this.renderer.setStyle(this.hostElement.nativeElement,'background','lightgreen');
    }

    @HostListener('mouseleave')
    onLeave(){
      // console.log(" Directive  holst listerner onLeave ");
      this.renderer.removeStyle(this.hostElement.nativeElement,'background');
    }
}
