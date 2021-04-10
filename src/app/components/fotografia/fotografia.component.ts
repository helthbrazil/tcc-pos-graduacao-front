import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fotografia',
  templateUrl: './fotografia.component.html',
  styleUrls: ['./fotografia.component.css']
})
export class FotografiaComponent implements OnInit {
  @Input() dado: any;
  hover = false;
  mostrarImagem = false;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.mostrarImagem = true;
    }, 1000);
  }

}
