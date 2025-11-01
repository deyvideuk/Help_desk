import { Component, Injectable } from '@angular/core';
import { RouterLink } from "@angular/router";
import { MenuMobile } from '../menu-mobile/menu-mobile';
import { MenuDesktop } from '../menu-desktop/menu-desktop';


@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    MenuMobile,
    MenuDesktop
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})

@Injectable({
  providedIn: 'root'
})

export class Header {
  public width : any = window.innerWidth;
  
  
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
