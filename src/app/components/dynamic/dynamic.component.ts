import { Component, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-dynamic',
  templateUrl: './dynamic.component.html',
  styleUrl: './dynamic.component.scss'
})
export class DynamicComponent {
  toggler:boolean=true;

  createComponent(){
    
  }
  
}
