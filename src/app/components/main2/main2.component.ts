import { Component, Input, ViewContainerRef } from '@angular/core';
import { NgFor } from '@angular/common';
import { CutTextPipe } from '../../pipes/cut-text.pipe';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-main2',
  standalone: true,
  imports: [NgFor, CutTextPipe, FormsModule],
  templateUrl: './main2.component.html',
  styleUrl: './main2.component.scss'
})
export class Main2Component {
  @Input() bigBlocks!:number;
  @Input() mediumBlocks!:number;
  @Input() toggler:boolean = true; 

  constructor(private viewContainer: ViewContainerRef){}

  showComponent(){
   // this.viewContainer.createComponent(DynamicComponent)
  }

  text:string = '';
  buttonIsPressed:boolean=false;
  toggler1:boolean= false;
  

  getBlocksArray (block: number):number[]{
    return Array.from({length:block}, (_, i) =>i);


  }

}
