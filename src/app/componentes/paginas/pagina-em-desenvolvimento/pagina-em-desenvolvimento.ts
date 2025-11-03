import { Component } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Footer } from '../../layout/footer/footer';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-pagina-em-desenvolvimento',
  imports: [
    RouterLink,
    Header,
    Footer
  ],
  templateUrl: './pagina-em-desenvolvimento.html',
  styleUrl: './pagina-em-desenvolvimento.css'
})
export class PaginaEmDesenvolvimento {

}
