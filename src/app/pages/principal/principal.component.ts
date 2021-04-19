import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxPlatformInfo } from 'ngx-platform-info';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  opened = false;
  modeDrawer= 'over';

  constructor(private router: Router, private loginService: LoginService,
    private ngxPlatformInfo: NgxPlatformInfo) {
    if (!ngxPlatformInfo.mobile) {
      this.opened = true;
      this.modeDrawer = 'side';
    }
  }

  ngOnInit(): void {
  }

  deslogar() {
    this.loginService.deslogar().subscribe();
  }

}
