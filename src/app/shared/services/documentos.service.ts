import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentosService {

  private readonly URL_BUSCA_FOTOS = `https://picsum.photos/id/1/200/300`;

  constructor(private http: HttpClient) { }

  buscarImagens(): Observable<any>{
    return this.http.get(this.URL_BUSCA_FOTOS);
  }

}
