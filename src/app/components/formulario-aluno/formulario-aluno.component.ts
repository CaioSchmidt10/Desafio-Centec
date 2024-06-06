import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlunosService } from 'src/app/servicos/alunos.service';

@Component({
  selector: 'app-formulario-aluno',
  templateUrl: './formulario-aluno.component.html',
  styleUrl: './formulario-aluno.component.css'
})
export class FormularioAlunoComponent {
 alunoForm: FormGroup;

 constructor(
  private _fb: FormBuilder, 
  private _alunoService: AlunosService, 
){
  this.alunoForm = this._fb.group({
    nomeCompleto: ['', Validators.required],
    idade: ['', [Validators.required, Validators.min(1)]],
    email: ['', [Validators.required, Validators.email]],
    telefone: ['', Validators.required],
    cidade: ['', Validators.required],
    estado: ['', Validators.required],
    instituicao: ['', Validators.required],
    anoLetivo: ['', Validators.required]
  })
 }

 alunoFormSubmit(){
  if (this.alunoForm.valid) {
    this._alunoService.adicionarAluno(this.alunoForm.value).subscribe({
      next: (val:any) =>{
        alert('Aluno Adicionado com Sucesso')
      },
      error: (err:any) =>{
        console.error(err);
      }
    })
  }
 }
}
