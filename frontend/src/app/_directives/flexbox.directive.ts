import { Directive, ElementRef, Renderer2, Input, OnInit, HostListener } from '@angular/core';

@Directive({
    selector: '[appFlexbox]'
})

export class FlexboxDirective implements OnInit {
    @Input() changeOnSzie: number = 599;
    @Input() flexFlow: string = "row wrap";
    @Input() justifyContent: string = "space-between";
    @Input() alignItems: string = "center";
    @Input() mobileDisplay : string = "block";
    @HostListener('window:resize', ['$event'])
    onResize(event?) {
      let mediaQuery = window.matchMedia("(max-width: "+ this.changeOnSzie + "px)")
      this.applyStyle(mediaQuery) // Call listener function at run time
    }  
    constructor(private renderer: Renderer2, private elmRef: ElementRef) { }    
    ngOnInit(){
      this.onResize();
    }
    applyStyle(mediaQuery) {
        if (mediaQuery.matches) { // If media query matches
          this.renderer.setStyle(this.elmRef.nativeElement, 'display', this.mobileDisplay);
        } else {
          this.renderer.setStyle(this.elmRef.nativeElement, 'display', "flex");
          this.renderer.setStyle(this.elmRef.nativeElement, 'justify-content', this.justifyContent);
          this.renderer.setStyle(this.elmRef.nativeElement, 'flex-flow', this.flexFlow);
          this.renderer.setStyle(this.elmRef.nativeElement, 'align-items', this.alignItems);
        }
      }    
}