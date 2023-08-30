import { Directive  ,ElementRef,Output,EventEmitter,HostListener} from '@angular/core';

@Directive({
  selector: '[appClickOutside]'
})
export class ClickOutsideDirective {

  constructor(private elementRef:ElementRef) { }
@Output() clickOutside = new EventEmitter<void>();

@HostListener('document:click', ['Sevent.target'])
public onClick(targetElement:HTMLElement):void{
const clickedInside=this.elementRef.nativeElement.contains(targetElement);
if(!clickedInside){
  this.clickOutside.emit();
}
}
}
