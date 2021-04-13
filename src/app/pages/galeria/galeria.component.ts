import { Component, OnInit } from '@angular/core';
import { Imagem } from 'src/app/shared/models/imagem';
import { DocumentosService } from 'src/app/shared/services/documentos.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  fotografias: Array<Imagem>;
  mostrarAdicionarImagem = {
    mostrar: false
  };

  flag = 0;
  constructor(private documentosService: DocumentosService) { }

  ngOnInit(): void {
    this.buscarImagens();
  }

  buscarImagens(event?) {
    this.documentosService.buscarImagens().subscribe(imagens => {
      this.mostrarAdicionarImagem.mostrar = false;
      this.fotografias = imagens;
    });
  }

  adicionarNovaImagem() {
    this.mostrarAdicionarImagem['mostrar'] = true;
  }

  excluirImagem(item: Imagem) {
    const itemCard = document.getElementById(`card-${item.id}`);
    if (itemCard) {
      itemCard.classList.add('animate__animated');
      itemCard.classList.add('animate__bounceOut');
      itemCard.classList.add('animate__fast');
      setTimeout(() => {
        const index = this.fotografias.findIndex(itemLista => itemLista.id === item.id);
        if (index !== -1) {
          this.fotografias.splice(index, 1);
        }
      }, 800);
    }
  }

}

