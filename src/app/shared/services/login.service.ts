import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpBackend, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private httpClientLogin: HttpClient;

  private readonly URL_LOGIN = `${environment.urlApi}login`;
  private readonly URL_ISLOGGED = `${environment.urlApi}aws/isLogged`;

  constructor(handler: HttpBackend, private httpClient: HttpClient, private router: Router) {
    this.httpClientLogin = new HttpClient(handler);
  }

  logar(dados): Observable<any> {
    return this.httpClientLogin.post(this.URL_LOGIN, dados, { observe: 'response' });
  }

  deslogar(): Observable<any> {
    return new Observable<any>(o => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
      o.next(true);
      o.complete();
    });
  }

  isLogged(): Observable<boolean> {
    return this.httpClient.get<boolean>(this.URL_ISLOGGED);
  }
}