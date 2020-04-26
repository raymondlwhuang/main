import { Directive, ElementRef, Renderer2, Input, OnInit, HostListener } from '@angular/core';

@Directive({
  selector: '[appFlexItem]'
})
export class FlexItemDirective implements OnInit{
  @Input() changeOnSzie: number = 599;
  @Input() flexBasis : number = 0;
  @Input() flexGrow : number = 1;
  @Input() marginRight : number = 10;
  @Input() marginBottom : number = 10;
  @Input() alignSelf: string = 'flex-start';
  @Input() flex: string = '0 1 auto';
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
      this.renderer.setStyle(this.elmRef.nativeElement,'margin-right', 0);
      this.renderer.setStyle(this.elmRef.nativeElement,'margin-bottom', this.marginBottom +'px');
  }
  else {
        this.renderer.setStyle(this.elmRef.nativeElement,'flex',this.flex);
      if(this.flexBasis!=0) {
        this.renderer.setStyle(this.elmRef.nativeElement,'flex-basis', this.flexBasis +'px');
        this.renderer.setStyle(this.elmRef.nativeElement,'flex-grow', 0);
        this.renderer.setStyle(this.elmRef.nativeElement,'margin-right', this.marginRight +'px');
        this.renderer.setStyle(this.elmRef.nativeElement,'margin-bottom', 0);
        this.renderer.setStyle(this.elmRef.nativeElement,'align-self', this.alignSelf);
      }
      else {
        this.renderer.setStyle(this.elmRef.nativeElement,'flex-grow',this.flexGrow);
      }
    }
  }  
}

