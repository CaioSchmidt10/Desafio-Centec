import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AlunosService } from 'src/app/servicos/alunos.service';
declare var bootstrap: any;

@Component({
  selector: 'app-formulario-aluno',
  templateUrl: './formulario-aluno.component.html',
  styleUrls: ['./formulario-aluno.component.css']
})
export class FormularioAlunoComponent implements OnChanges {
  @Input() alunoData: any; // Recebe os dados do aluno

  alunoForm: FormGroup;

  constructor(
    private _fb: FormBuilder, 
    private _alunoService: AlunosService
  ) {
    this.alunoForm = this._fb.group({
      nomeCompleto: ['', Validators.required],
      idade: ['', [Validators.required, Validators.min(1)]],
      email: ['', [Validators.required, Validators.email]],
      telefone: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      instituicao: ['', Validators.required],
      anoLetivo: ['', Validators.required]
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['alunoData'] && changes['alunoData'].currentValue) {
      this.alunoForm.patchValue(this.alunoData);
    }
  }

  alunoFormSubmit() {
    if (this.alunoForm.valid) {
      if (this.alunoData && this.alunoData.id) {
        this._alunoService.atualizarAluno(this.alunoData.id, this.alunoForm.value).subscribe({
          next: (val: any) => {
            alert('Aluno Atualizado com Sucesso');
            const modal = bootstrap.Modal.getInstance(document.getElementById('modalAlunos'));
            modal.hide();
          },
          error: (err: any) => {
            console.error(err);
          }
        });
      } else {
        this._alunoService.adicionarAluno(this.alunoForm.value).subscribe({
          next: (val: any) => {
            alert('Aluno Adicionado com Sucesso');
            const modal = bootstrap.Modal.getInstance(document.getElementById('modalAlunos'));
            modal.hide();
          },
          error: (err: any) => {
            console.error(err);
          }
        });
      }
    }
  }
}
