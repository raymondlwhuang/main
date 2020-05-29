import { Directive, ElementRef, Renderer2, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appFlexItem]'
})
export class FlexItemDirective implements OnInit{
  @Input() changeOnSzie: number = 599;
  @Input() margin : string = "0 10px 0 0";
  @Input() marginMobile : string = "0 0 10px 0";
  @Input() alignSelf: string = 'auto';
  @Input() flex: string = 'auto';
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
      this.renderer.setStyle(this.elmRef.nativeElement,'margin', this.marginMobile);
  }
  else {
        this.renderer.setStyle(this.elmRef.nativeElement,'flex',this.flex);
        this.renderer.setStyle(this.elmRef.nativeElement,'margin', this.margin);
        this.renderer.setStyle(this.elmRef.nativeElement,'align-self', this.alignSelf);
    }
  }  
}

