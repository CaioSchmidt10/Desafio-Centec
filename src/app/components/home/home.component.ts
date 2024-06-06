import { Component, OnInit } from '@angular/core';
import "bootstrap-icons/font/bootstrap-icons.min.css"
import { AlunosService } from 'src/app/servicos/alunos.service';
declare var bootstrap: any;

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
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  
  alunos: Aluno[] = [];

  constructor(private alunoService: AlunosService) {}

  ngOnInit(): void {
    this.alunoService.getAlunoList().subscribe(data => {
      this.alunos = data;
    });
  }


  deleteAluno(alunoId: string): void {
    alert('Aluno excluido!')
    this.alunoService.deleteAluno(alunoId).subscribe(() => {
      this.alunos = this.alunos.filter(aluno => aluno.id !== alunoId);
    });
  }
}
