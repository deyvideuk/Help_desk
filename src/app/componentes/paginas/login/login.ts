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
    cpf : new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(19)]),
    senha : new FormControl('', [Validators.required, Validators.minLength(6)])
  });

  verificar(event: any){
    let valor = event.target.value.replace(/\D/g, '');

    if (valor.length <= 11) {
      valor = valor
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    } else {
      valor = valor
      .replace(/^(\d{3})(\d)/, '$1.$2')
      .replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3')
      .replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d{4})/, '$1.$2.$3/$4')
      .replace(/(\d{4})(\d{0,2})$/, '$1-$2');
    }

    event.target.value = valor;
    this.formLogin.get('cpf')?.setValue(valor);
  }

  onSubmitLogin() {
    if(this.formLogin.valid){
      alert("Login efetuado com sucesso!");
      console.log(this.formLogin.controls.cpf.value);
      console.log(this.formLogin.controls.senha.value);
      this.formLogin.reset();
    }
  }
}
