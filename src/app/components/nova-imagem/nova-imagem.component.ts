import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-nova-imagem',
  templateUrl: './nova-imagem.component.html',
  styleUrls: ['./nova-imagem.component.css']
})
export class NovaImagemComponent implements OnInit {
  value = '';
  @Input() mostrarComponente;
  mostrarCarregando = false;
  @Output() sairEvent = new EventEmitter();
  @Output() buscarImagens = new EventEmitter();
  constructor(private _snackBar: MatSnackBar) { }

  ngAfterViewChecked(changes: SimpleChanges): void {
    setTimeout(() => {
      if (this.mostrarComponente['mostrar']) {
        const descricao = document.getElementById('descricao');
        if (descricao) {
          descricao.focus();
        }
      }
    }, 100);
  }

  ngOnInit(): void {
    
  }

  enviarImagens() {
    if (this.value && this.value !== "") {
      this.mostrarCarregando = true;
      setTimeout(() => {
        this.mostrarCarregando = false;
        this.openSnackBar('Imagens enviadas com sucesso', undefined);
        this.buscarImagens.emit(this.value);
        this.value = "";
      }, 2000);
    } else {
      this.openSnackBar(`Descrição da mensagem é obrigatória`, undefined);
    }
  }

  sair() {
    // Limpar tudo
    this.value = "";
    this.mostrarComponente['mostrar'] = false;
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
