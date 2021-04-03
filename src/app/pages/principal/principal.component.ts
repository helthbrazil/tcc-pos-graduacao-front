import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  opened = true;
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }

  deslogar(){
    this.loginService.deslogar().subscribe();
  }

}
