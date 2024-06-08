import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tela-cadastro',
  templateUrl: './tela-cadastro.component.html',
  styleUrl: './tela-cadastro.component.css'
})
export class TelaCadastroComponent {
  cadastroForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router){
    this.cadastroForm = this.fb.group({
      nomeCompleto:['',Validators.required],
      cpf: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      repeatPassword: ['', Validators.required]
    })
  }

  onSubmit() {
    if (this.cadastroForm.valid) {
      console.log(this.cadastroForm)
      this.router.navigate(['../home']);
    }
  }
}
