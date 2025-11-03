import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Header } from '../../layout/header/header';
import { Footer } from '../../layout/footer/footer';

@Component({
  selector: 'app-desenvolvendo',
  imports: [
    RouterLink,
    Header,
    Footer
  ],
  templateUrl: './desenvolvendo.html',
  styleUrl: './desenvolvendo.css'
})
export class Desenvolvendo {

}
