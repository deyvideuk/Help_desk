import { Component } from '@angular/core';
import { Header } from '../../layout/header/header';
import { Footer } from '../../layout/footer/footer';
import { FormControl, FormGroup, FormGroupName, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  imports: [
    ReactiveFormsModule,
    Header,
    Footer
  ],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
 newsletter = new FormGroup({
    email : new FormControl("", [Validators.email, Validators.required, Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)])
 });

 onSubmitNewsletter(){
    if(this.newsletter.valid){
      alert("Cadastro realizado com sucesso para: " + this.newsletter.controls.email.value);
      this.newsletter.reset();
    }
 }

}
