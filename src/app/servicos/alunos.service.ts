import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  private apiUrl = 'http://localhost:3000/alunos'; // URL da API

  constructor(private http: HttpClient) {}

  getAlunoList(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  adicionarAluno(aluno: any): Observable<any> {
    return this.http.post(this.apiUrl, aluno);
  }

  atualizarAluno(id: string, aluno: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, aluno);
  }

  deleteAluno(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
