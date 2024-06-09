import { Component, OnInit, ViewChild } from '@angular/core';
import { AlunosService } from 'src/app/servicos/alunos.service';
import { ModalComponent } from '../modal/modal.component';

interface Aluno {
  id: string;
  nomeCompleto: string;
  idade: number;
  email: string;
  telefone: number;
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
  filteredAlunos: Aluno[] = [];
  selectedAluno: Aluno | null = null;

  @ViewChild(ModalComponent) modalComponent!: ModalComponent;

  constructor(private alunoService: AlunosService) {}

  ngOnInit(): void {
    this.alunoService.getAlunoList().subscribe(data => {
      this.alunos = data;
      this.filteredAlunos = data; 
    });
  }

  deleteAluno(alunoId: string): void {
    this.alunoService.deleteAluno(alunoId).subscribe(() => {
      this.alunos = this.alunos.filter(aluno => aluno.id !== alunoId);
      this.filteredAlunos = this.filteredAlunos.filter(aluno => aluno.id !== alunoId);
      alert('Aluno excluído!');
    });
  }

  openEditForm(aluno: Aluno) {
    this.selectedAluno = aluno;
    this.modalComponent.alunoData = this.selectedAluno;
    this.modalComponent.abrirModal();
  }

  onSearchInput(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value;
    this.filterAlunos(searchTerm);
  }

  filterAlunos(searchTerm: string): void {
    if (searchTerm) {
      this.filteredAlunos = this.alunos.filter(aluno =>
        aluno.nomeCompleto.toLowerCase().includes(searchTerm.toLowerCase())
      );
    } else {
      this.filteredAlunos = [...this.alunos];
    }
  }

  sortAlunos(): void {
    if (this.filteredAlunos.length > 1) {
      const firstAluno = this.filteredAlunos[0];
      const sortedAlunos = [...this.filteredAlunos].sort((a, b) => {
        if (a.nomeCompleto < b.nomeCompleto) return -1;
        if (a.nomeCompleto > b.nomeCompleto) return 1;
        return 0;
      });
      if (sortedAlunos[0] === firstAluno) {
        this.filteredAlunos = sortedAlunos.reverse();
      } else {
        this.filteredAlunos = sortedAlunos;
      }
    }
  }

}
