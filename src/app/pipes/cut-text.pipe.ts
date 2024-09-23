import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutText',
  standalone: true,
})
export class CutTextPipe implements PipeTransform {

  transform(text: string, buttonIsPressed:boolean): string | null {
    if(buttonIsPressed){
      return text = ''; 
    }
    return text;
  }

}
