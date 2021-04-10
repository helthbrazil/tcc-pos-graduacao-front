import { Component, OnInit } from '@angular/core';
import { DocumentosService } from 'src/app/shared/services/documentos.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  fotografias: Array<any>;
  mostrarAdicionarImagem = {
    mostrar: false
  };

  flag = 0;
  constructor(private documentosService: DocumentosService) { }

  ngOnInit(): void {
    this.fotografias = new Array<any>();
    const qtdImagens = 8;

    for (let i = 0; i < qtdImagens; i++) {
      this.flag = i;
      this.fotografias.push({ src: `https://picsum.photos/600/600?random=${i + 1}`, descricao: `Descrição teste (${i + 1})` });
    }
  }

  adicionarNovaImagem() {
    this.mostrarAdicionarImagem['mostrar'] = true;
  }

  buscarImagens(event) {
    this.flag++;
    this.fotografias.unshift({ src: `https://picsum.photos/600/600?random=${this.flag + 1}`, descricao: `${event}` });
    this.mostrarAdicionarImagem['mostrar'] = false;
  }

}
