import { Component, OnInit, inject } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  private formBuilder = inject(FormBuilder); //Inyeccion al formBuilder y Router para enlazar links
  private router = inject(Router);
  loginForm=this.formBuilder.group({ //Agregar los formsControls
    email:['abc@gmail.com',[Validators.required, Validators.email]],
    password:['',Validators.required],
  }) // Objeto para el formReactive
  

  ngOnInit(): void {
      
  }

  get email(){//Metodo get para la validacion reactiva
    return this.loginForm.controls.email;
  }

  get password(){//Metodo get para la validacion reactiva
    return this.loginForm.controls.password;
  }

  login(){ //Metodo Login valida la autenticidad
    if(this.loginForm.valid){
      console.log("Llamr al servicio de login");
      this.router.navigateByUrl('/inicio');
      this.loginForm.reset();
    }else{
      this.loginForm.markAllAsTouched();
      alert("Error al ingresar los datos.");
    }
  }
}
