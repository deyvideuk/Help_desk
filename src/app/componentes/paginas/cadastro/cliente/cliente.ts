import { Component } from '@angular/core';
import { Header } from '../../../layout/header/header';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Footer } from '../../../layout/footer/footer';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cliente',
  imports: [Header, ReactiveFormsModule, Footer, RouterLink],
  templateUrl: './cliente.html',
  styleUrl: './cliente.css'
})
export class Cliente {
  formCadastroCliente = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    cpf: new FormControl('', [Validators.required, Validators.minLength(11), Validators.maxLength(19)]),
    complemento: new FormControl('', [Validators.required]),
    dataNasc: new FormControl([Validators.required]),
    senha : new FormControl('', [Validators.required, Validators.minLength(6)]),
    email : new FormControl('', [Validators.email, Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)]),
    end: new FormControl('',[Validators.required]),
    numero: new FormControl([Validators.required]),
    telefone: new FormControl('', [Validators.required]),
    confirmSenha: new FormControl('', [Validators.required, Validators.minLength(6)])
  })
}
