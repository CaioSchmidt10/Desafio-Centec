import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TelaPrincipalComponent } from './components/tela-principal/tela-principal.component';
import { TelaCadastroComponent } from './components/tela-cadastro/tela-cadastro.component';

const routes: Routes = [
  {path:'', component: TelaPrincipalComponent},
  {path:'home', component: HomeComponent},
  {path:'cadastro', component: TelaCadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
