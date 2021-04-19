import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Imagem } from '../models/imagem';

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {

  private readonly URL_REMOVER_IMAGEM = `${environment.urlApi}aws/excluirImagem`
  private readonly URL_BUSCA_FOTOS = `${environment.urlApi}aws/getImages`;
  private readonly URL_ENVIO_FOTOGRAFIAS = `${environment.urlApi}aws/uploadFiles`;

  constructor(private http: HttpClient) { }

  buscarImagens(): Observable<Imagem[]> {
    return this.http.get<Imagem[]>(this.URL_BUSCA_FOTOS);
  }

  excluirImagem(imagem: Imagem) {
    debugger
    return this.http.post(this.URL_REMOVER_IMAGEM, imagem);
  }

  enviarImagens(anexos: Array<File>) {
    let formdata = new FormData();
    if (anexos && anexos.length > 0) {
      anexos.forEach(file => {
        formdata.append('files', file, file['name']);
      });
    }

    return this.http.post(this.URL_ENVIO_FOTOGRAFIAS, formdata);
  }

}
