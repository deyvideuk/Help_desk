import { HttpClient, } from '@angular/common/http';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Cliente } from './componentes/paginas/cadastro/cliente/cliente';

export interface Clientes{
  id?: number;
  cpf: string;
  nome: string;
  senha: string
}

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Help_desk');
  dataSource: Cliente[] = [];
  httpClient = inject(HttpClient)

  ngOnInit(){
    this.httpClient.get<Cliente[]>("http://localhost:3000/clientes")
      .subscribe((cliente) => {
        this.dataSource = cliente;
      });
  }
}
