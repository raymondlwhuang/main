import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHoverItem]'
})
export class HoverItemDirective {
  @HostBinding('class.item-mouse-over') ishovering : boolean; 
  @HostListener('mouseover') onMouseOver() {this.ishovering = true;}
  @HostListener('mouseout') onMouseOut() {this.ishovering = false;} 
}
