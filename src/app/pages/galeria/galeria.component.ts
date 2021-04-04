import { Component, OnInit } from '@angular/core';
import { DocumentosService } from 'src/app/shared/services/documentos.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  fotografias: Array<any>;
  constructor(private documentosService: DocumentosService) { }

  ngOnInit(): void { 
    this.fotografias = new Array<any>();
    const qtdImagens = 15;
    
    for(let i = 0 ; i < qtdImagens; i++){
      this.fotografias.push({src: `https://picsum.photos/600/600?random=${i+1}`});
    }

    /* this.documentosService.buscarImagens().subscribe(res => {
      debugger
      this.fotografias = new Array<string>();
      res.forEach(element => {
        this.fotografias.push(element);
      });
    }); */
  }

}
