import { Routes } from '@angular/router';
import { Home } from './componentes/paginas/home/home';
import { Login } from './componentes/paginas/login/login';

export const routes: Routes = [
    {
        path: "",
        component: Home
    },
    {
        path: "login",
        component: Login
    }
];
