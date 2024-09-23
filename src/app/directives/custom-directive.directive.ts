import { Directive } from '@angular/core';

@Directive({
  selector: '[appCustomDirective]',
  standalone: true
})
export class CustomDirectiveDirective {

  constructor() { 
    console.log('custom directive works');
  }

}
