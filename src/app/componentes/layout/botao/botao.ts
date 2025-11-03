import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-botao',
  imports: [],
  templateUrl: './botao.html',
  styleUrl: './botao.css'
})
export class Botao{

  
  @Input() texto : string = '';
  @Input() modo : string = '';
  @Input() type : string = '';
  @Input() disabled : boolean = false;
  @Input() formGroupParent? : FormGroup;

  // isDisabled : boolean = false;
  // desabilitado? : string;

  // ngOnChanges(changes: SimpleChanges): void {
  //     if(changes['disabled']){
  //       this.isDisabled = this.disabled === 'sim';
  //       this.teste();
  //     }
  //   }

  //   teste(){
  //     alert(this.formGroup);
  //   }
    
   
  
}
