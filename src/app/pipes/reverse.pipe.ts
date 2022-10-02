import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(chaine:any): any {
    let reversechaine;
    reversechaine = "";
    // for (let i = chaine.length - 1  ;  i >= 0 ; i--) {
    //   console.log("i",i);
    //   reversechaine = reversechaine + chaine[i];
    // }
    // console.log("reversechaine",reversechaine);
    for (let i = 0; i < chaine.length; i++) {
      reversechaine = chaine[i] + reversechaine;
    }
    return reversechaine;
  }

}
