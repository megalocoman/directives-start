import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighligth]'
})
export class BetterHighligthDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input() higlightColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgrounColor: string ;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }
  ngOnInit(): void {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.backgrounColor=this.defaultColor;
  }


  @HostListener('mouseenter') mouseOver(eventData: Event){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.backgrounColor = this.higlightColor;
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event){
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'green');
    this.backgrounColor= this.defaultColor;

  }


}
