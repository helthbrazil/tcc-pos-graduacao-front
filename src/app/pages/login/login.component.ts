import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login.service';
import { User } from 'src/app/shared/services/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isMobile = false;
  showLoading = false;

  public todo: FormGroup;

  username: string;
  password: string;

  formularioMobile = {
    username: '',
    password: ''
  };

  formulario = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
  });
  formHasError = false;
  constructor(private fb: FormBuilder, private loginService: LoginService,
    private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  logForm() {
    console.log(this.todo.value);
  }

  logar() {
    let dados;
    dados = this.formulario.value;

    this.showLoading = true;
    setTimeout(() => { // SIMULATE DELAY
      this.loginService.logar(dados).subscribe((res) => {
        this.formHasError = false;
        localStorage.setItem(User.STRING_TOKEN, res.headers.get('Authorization'));
        this.router.navigate(['']);
        this.showLoading = false;
      }, err => {
        this.formHasError = true;
        console.error(err);
        this.snackBar.open('Usuário ou senha inválidos', undefined, { duration: 4000/* , panelClass: ['error-snackbar'] */ });
        this.showLoading = false;
      });
    }, 300);
  }

}
