import { Component, Output, EventEmitter, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-main-component',
  standalone: true,
  imports: [],
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.scss'
})
export class MainComponentComponent {
  toggler: boolean = false;
  @Output() toggle = new EventEmitter<boolean>();
  
  // ngOnChange(changes:SimpleChanges){
  //   console.log('onChange');
  //   console.log(changes);
  // }

  ngOnInit():void{
    console.log('onInit')
  }

  ngDoCheck():void{
    console.log('checked')
  }

  toggleToggler(){
    this.toggler = !this.toggler;
    this.toggle.emit(this.toggler);
  }
}
