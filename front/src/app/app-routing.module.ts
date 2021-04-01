import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjudaComponent } from './pages/ajuda/ajuda.component';
import { ConfiguracoesComponent } from './pages/configuracoes/configuracoes.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'galeria',
    pathMatch: 'full'
  },
  {
    path: 'galeria',
    component: GaleriaComponent
  }, 
  {
    path: 'configuracoes',
    component: ConfiguracoesComponent
  },
  {
    path: 'ajuda',
    component: AjudaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
