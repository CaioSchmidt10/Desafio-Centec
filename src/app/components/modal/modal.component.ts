import { Component, Input } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Input() alunoData: any;

  abrirModal() {
    const modal = new bootstrap.Modal(document.getElementById('modalAlunos'));
    modal.show();
  }
  
  fecharModal() {
    const modal = bootstrap.Modal.getInstance(document.getElementById('modalAlunos'));
    modal.hide();
  }
}
