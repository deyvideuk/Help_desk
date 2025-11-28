import { Routes } from '@angular/router';
import { Home } from './componentes/paginas/home/home';
import { Login } from './componentes/paginas/login/login';
import { Cliente } from './componentes/paginas/cadastro/cliente/cliente';
import { Tecnico } from './componentes/paginas/cadastro/tecnico/tecnico';
import { Dashboard } from './componentes/paginas/dashboard/dashboard';
import { MeusChamados } from './componentes/paginas/dashboard/meus-chamados/meus-chamados';
import { AbrirChamados } from './componentes/paginas/dashboard/abrir-chamados/abrir-chamados';
import { Historico } from './componentes/paginas/dashboard/historico/historico';
import { Notificacoes } from './componentes/paginas/dashboard/notificacoes/notificacoes';
import { Perfil } from './componentes/paginas/dashboard/perfil/perfil';

export const routes: Routes = [
    {
        path: 'dashboard',
        component: Dashboard, // seu layout que contém aside + router-outlet
        children: [
        { path: 'meus-chamados', component: MeusChamados },
        { path: 'abrir-chamado', component: AbrirChamados },
        { path: 'historico', component: Historico },
        { path: 'notificacoes', component: Notificacoes },
        { path: 'perfil', component: Perfil },

        // rota padrão
        { path: '', redirectTo: 'meus-chamados', pathMatch: 'full' }
        ]
    },
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
        path: "sobre",
        loadComponent: () => import('./componentes/paginas/sobre/sobre').then(m => m.Sobre)
    },
    {
        path: "dashboard",
        loadComponent: () => import('./componentes/paginas/dashboard/dashboard').then(m => m.Dashboard)
    },
    {
        path: "ops..",
        loadComponent: () => import('./componentes/paginas/desenvolvendo/desenvolvendo').then(m => m.Desenvolvendo)
    }
    






];
