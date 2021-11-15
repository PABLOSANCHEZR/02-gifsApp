import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { Gif } from '../interface/gifs.interfaces';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent  {

  get resultados(){
    return this.gifsService.resultados;
  }

  constructor( private gifsService: GifsService) { }

  
}
