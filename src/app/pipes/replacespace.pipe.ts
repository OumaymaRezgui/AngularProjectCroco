import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replacespace'
})
export class ReplacespacePipe implements PipeTransform {

  transform(ch:any): any {
    let ch1;
    ch1 = "";
    for (let i = 0; i < ch.length; i++) {
      if (ch[i] !=  " "){
      ch1 = ch1 + ch[i];
    }
      if (ch[i] ==  " "){
        ch1 = ch1 + "-";
      }      
    }
    console.log("ch1",ch1);
    return ch1;
  }

}