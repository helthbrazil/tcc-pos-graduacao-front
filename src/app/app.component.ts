import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './shared/services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {

  constructor(private loginService: LoginService, private router: Router){}
 
  ngOnInit(): void {
    this.isLogged();
  }

  private isLogged() {
    this.loginService.isLogged().subscribe(res => {
      console.log('está logado');
    }, err => {
      console.error('Não está logado');
      this.router.navigate(['/login']);
    });
  }
}
