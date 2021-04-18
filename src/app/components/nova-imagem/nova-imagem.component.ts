import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DocumentosService } from 'src/app/shared/services/documentos.service';

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
  listaAnexos: Array<File>;

  constructor(private _snackBar: MatSnackBar,
    private documentosService: DocumentosService) { }

  ngAfterViewChecked(changes: SimpleChanges): void {
    /* setTimeout(() => {
      if (this.mostrarComponente['mostrar']) {
        const descricao = document.getElementById('descricao');
        if (descricao) {
          descricao.focus();
        }
      }
    }, 1000); */
  }

  ngOnInit(): void {
    this.listaAnexos = new Array<File>();
  }

  adicionarArquivos(fileList: FileList) {
    let quantidadeArquivos = fileList.length;
    if (this.listaAnexos) {
      for (let i = 0; i < quantidadeArquivos; i++) {
        if (!this.listaAnexos.some(item => item.name === fileList[i].name)) {
          this.listaAnexos.push(fileList[i]);
        }
      }
    }
  }

  enviarImagens() {
    if (this.listaAnexos && this.listaAnexos.length > 0) {
      this.mostrarCarregando = true;
      this.documentosService.enviarImagens(this.listaAnexos).subscribe(res => {
        this.mostrarCarregando = false;
        this.openSnackBar('Imagens enviadas com sucesso', undefined);
        this.buscarImagens.emit(true);
      }, err => {
        this.mostrarCarregando = false;
        this.openSnackBar('Erro ao enviar imagens', undefined);
      });
    }
  }

  removerAnexo(file: File) {
    const index = this.listaAnexos.findIndex(item => item.name === file.name);
    if (index !== -1) {
      this.listaAnexos.splice(index, 1);
    }
  }

  sair() {
    // Limpar tudo
    const novaImagem = document.getElementById('novaImagem');
    if (novaImagem) {
      novaImagem.classList.add('animate__bounceOutDown');
      setTimeout(() => {
        this.mostrarComponente['mostrar'] = false;
        novaImagem.classList.remove('animate__bounceOutDown');
        this.listaAnexos = new Array<File>();
      }, 500);
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
