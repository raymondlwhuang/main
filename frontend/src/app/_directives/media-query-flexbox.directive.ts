import { Directive, ElementRef, Renderer2, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appMediaQueryFlexbox]'
})
export class MediaQueryFlexboxDirective implements OnInit {
  @Input() changeOnSzie: number = 599;
  @Input() flexDirection: string = "row";
  @Input() justifyContent: string = "space-between";
  @Input() flexWrap: string = "wrap";
  @Input() alignItems: string;
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
      this.renderer.setStyle(this.elmRef.nativeElement, 'flex-wrap', this.flexWrap);
      this.renderer.setStyle(this.elmRef.nativeElement, 'flex-direction', this.flexDirection);
      if(this.justifyContent=="center" && !this.alignItems) {
        this.renderer.setStyle(this.elmRef.nativeElement, 'align-items', 'center');

      }
    }
  }
}
