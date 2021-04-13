import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Imagem } from '../models/imagem';

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {

  private readonly URL_BUSCA_FOTOS = `http://localhost:8080/aws/getImages`;
  private readonly URL_ENVIO_FOTOGRAFIAS = `http://localhost:8080/aws/uploadFiles`;

  constructor(private http: HttpClient) { }

  buscarImagens(): Observable<Imagem[]>{
    return this.http.get<Imagem[]>(this.URL_BUSCA_FOTOS);
  }

  enviarImagens(anexos: Array<File>){
    debugger;
    let formdata = new FormData();
    if(anexos && anexos.length > 0){
      anexos.forEach(file => {
        formdata.append('files', file, file['name']);
      });
    }

    return this.http.post(this.URL_ENVIO_FOTOGRAFIAS, formdata);
  }

}
