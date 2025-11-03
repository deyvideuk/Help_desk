import { Routes } from '@angular/router';
import { Home } from './componentes/paginas/home/home';
import { Login } from './componentes/paginas/login/login';
import { Cliente } from './componentes/paginas/cadastro/cliente/cliente';
import { Tecnico } from './componentes/paginas/cadastro/tecnico/tecnico';

export const routes: Routes = [
    {
        path: "",
        loadComponent: () => import('./componentes/paginas/home/home').then(m => m.Home)
    },
    {
        path: "login",
        loadComponent: () => import('./componentes/paginas/login/login').then(m => m.Login)
    },
    {
        path: "cadastro-cliente",
        loadComponent: () => import('./componentes/paginas/cadastro/cliente/cliente').then(m => m.Cliente)
    },
    {
        path: "cadastro-tecnico",
        loadComponent: () => import('./componentes/paginas/cadastro/tecnico/tecnico').then(m => m.Tecnico)
    },
    {
        path: "ops..",
        loadComponent: () => import('./componentes/paginas/desenvolvendo/desenvolvendo').then(m => m.Desenvolvendo)
    }
    






];
