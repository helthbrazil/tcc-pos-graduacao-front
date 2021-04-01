import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  fotografias: Array<string>;
  constructor() { }

  ngOnInit(): void {
    this.fotografias = new Array<string>();

    for (let i = 0; i < 50; i++) {
      this.fotografias.push(`Título ${i + 1}`);
    }
  }

}
