import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { AjudaComponent } from './pages/ajuda/ajuda.component';
import { ConfiguracoesComponent } from './pages/configuracoes/configuracoes.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { LoginComponent } from './pages/login/login.component';
import { PrincipalComponent } from './pages/principal/principal.component';


const routes: Routes = [
  {
    pathMatch: 'full',
    path: '',
    redirectTo: 'principal',
  },
  {
    path: 'login',
    component: LoginComponent    
  },
  {
    path: 'principal',
    component: PrincipalComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'galeria',
      },
      {
        path: 'galeria',
        component: GaleriaComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'configuracoes',
        component: ConfiguracoesComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'ajuda',
        component: AjudaComponent,
        canActivate: [AuthGuard],
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
