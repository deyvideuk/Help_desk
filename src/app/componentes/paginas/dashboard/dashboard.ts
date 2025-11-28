import { Component } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Footer } from '../../layout/footer/footer';
import { RouterOutlet, RouterLinkWithHref } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  imports: [Header, Footer, RouterOutlet, RouterLinkWithHref],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {

}
