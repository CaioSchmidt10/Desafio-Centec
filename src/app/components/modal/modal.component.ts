import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  abrirModal(){
    const modalDiv = document.getElementById('modalALunos')
    if(modalDiv!= null){
      modalDiv.style.display="block";
    }
  }

  fecharModal(){
    const modalDiv= document.getElementById('modalALunos')
    if(modalDiv!= null){
      modalDiv.style.display="none";
    }
  }

}
