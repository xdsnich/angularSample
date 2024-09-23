import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadComponentComponent } from "./components/head-component/head-component.component";
import { MainComponentComponent } from "./components/main-component/main-component.component";
import { Main2Component } from "./components/main2/main2.component";
import { CustomDirectiveDirective } from './directives/custom-directive.directive';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeadComponentComponent, MainComponentComponent, Main2Component, CustomDirectiveDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  

  title = 'angular Sample';
  toggler:boolean = false;

  togglerUpdater(newToggler: boolean){
    this.toggler = newToggler;
    console.log(this.toggler);
  }
}
