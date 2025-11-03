import { Routes } from '@angular/router';
import { Home } from './componentes/paginas/home/home';
import { Login } from './componentes/paginas/login/login';
import { Cliente } from './componentes/paginas/cadastro/cliente/cliente';
import { Tecnico } from './componentes/paginas/cadastro/tecnico/tecnico';
import { PaginaEmDesenvolvimento } from './componentes/paginas/pagina-em-desenvolvimento/pagina-em-desenvolvimento';

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "login",
        component: Login
    },
    {
        path: "cadastro-cliente",
        component: Cliente
    },
    {
        path: "cadastro-tecnico",
        component: Tecnico
    },
    {
        path: "ops..",
        component: PaginaEmDesenvolvimento
    }
    






];
