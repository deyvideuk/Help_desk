import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-menu-mobile',
  imports: [
    RouterLink,
  ],
  templateUrl: './menu-mobile.html',
  styleUrl: './menu-mobile.css'
})
export class MenuMobile {
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
