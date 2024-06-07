import { Component, OnInit, ViewChild } from '@angular/core';
import { AlunosService } from 'src/app/servicos/alunos.service';
import { ModalComponent } from '../modal/modal.component';

interface Aluno {
  id: string;
  nomeCompleto: string;
  idade: number;
  email: string;
  telefone: string;
  cidade: string;
  estado: string;
  instituicao: string;
  anoLetivo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  alunos: Aluno[] = [];
  selectedAluno: Aluno | null = null;

  @ViewChild(ModalComponent) modalComponent!: ModalComponent;

  constructor(private alunoService: AlunosService) {}

  ngOnInit(): void {
    this.alunoService.getAlunoList().subscribe(data => {
      this.alunos = data;
    });
  }

  deleteAluno(alunoId: string): void {
    this.alunoService.deleteAluno(alunoId).subscribe(() => {
      this.alunos = this.alunos.filter(aluno => aluno.id !== alunoId);
      alert('Aluno excluido!');
    });
  }

  openEditForm(aluno: Aluno) {
    this.selectedAluno = aluno;
    this.modalComponent.alunoData = this.selectedAluno;
    this.modalComponent.abrirModal();
  }
}
