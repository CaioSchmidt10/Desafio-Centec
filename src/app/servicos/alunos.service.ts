import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private apiUrl = 'http://localhost:3000/alunos';

  constructor(private _http:HttpClient) { }
 
  adicionarAluno(data:any){
    return this._http.post(this.apiUrl,data); 
  }

  getAlunoList(): Observable<Aluno[]> {
    return this._http.get<Aluno[]>(this.apiUrl);
  }

  editarAluno(alunoId: string, novoAlunoData: any): Observable<any> {
    const url = `${this.apiUrl}/${alunoId}`;
    return this._http.put(url, novoAlunoData);
  }
  

  deleteAluno(alunoId: string): Observable<any> {
    const url = `${this.apiUrl}/${alunoId}`;
    return this._http.delete(url);
  }
}
