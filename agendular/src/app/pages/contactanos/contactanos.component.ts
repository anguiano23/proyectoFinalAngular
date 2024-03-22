import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrl: './contactanos.component.css'
})
export class ContactanosComponent {
  get name(){
    return this.formUser.get('name');
  }
  get email(){
    return this.formUser.get('email');
  }

 
 
 formUser =new FormGroup({
   'name': new FormControl('',Validators.required),
   'email': new FormControl('',[Validators.required,Validators.email]),
   'cel': new FormControl('',[Validators.required, Validators.maxLength(10)]),
   'consul': new FormControl('',Validators.required),
 });
  
 procesar(){  
    alert("Nos comunicaremos lo antes posible")
    this.formUser.reset();
}

}