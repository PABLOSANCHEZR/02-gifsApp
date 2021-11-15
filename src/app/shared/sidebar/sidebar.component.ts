import { Component, ViewChild } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent  {

  get historial(){
    return this.gifsService.historial;
  }

  get resultados (){
    return this.gifsService.resultados
  }

  constructor(private gifsService : GifsService) { }

  buscar( termino : string){
    return this.resultados;
    console.log(termino);
  }


  

}
