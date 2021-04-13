import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-fotografia',
  templateUrl: './fotografia.component.html',
  styleUrls: ['./fotografia.component.css']
})
export class FotografiaComponent implements OnInit {
  @Input() dado: any;
  @Output() excluirImagemEvent = new EventEmitter();
  hover = false;
  mostrarImagem = false;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.mostrarImagem = true;
    }, 1000);
  }

  excluirImagem(){
    this.excluirImagemEvent.emit(true);
  }

}
