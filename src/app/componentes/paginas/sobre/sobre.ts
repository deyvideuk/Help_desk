import { Component } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Footer } from '../../layout/footer/footer';

@Component({
  selector: 'app-sobre',
  imports: [Header, Footer],
  templateUrl: './sobre.html',
  styleUrl: './sobre.css',
})
export class Sobre {

}
