import { Component, Injectable } from '@angular/core';
import { RouterLink } from "@angular/router";
import { MenuMobile } from '../menu-mobile/menu-mobile';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    MenuMobile
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})

@Injectable({
  providedIn: 'root'
})

export class Header {
  width = window.innerWidth;
  
  
  public menu(opt:string){
    if(opt == 'open'){
      let menu = document.querySelector('#header') as HTMLElement;
      let btnMenu = document.querySelector('.menu') as HTMLElement;

      menu.style.left = "0";
      btnMenu.style.display = "none";
    }else if(opt == 'close'){
      let menu = document.querySelector('#header') as HTMLElement;
      let btnMenu = document.querySelector('.menu') as HTMLElement;

      menu.style.left = "-700px";
      btnMenu.style.display = "flex";
    }
  }
}
