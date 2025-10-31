import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Header } from './../../layout/header/header';
import { Footer } from '../../layout/footer/footer';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule, Header, Footer],
templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  formLogin = new FormGroup({
    cpf : new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]),
    senha : new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  onSubmitLogin() {
    if(this.formLogin.valid){
      alert("Login efetuado com sucesso!");
    }
  }
}
