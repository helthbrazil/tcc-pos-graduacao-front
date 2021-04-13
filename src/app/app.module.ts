import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { AjudaComponent } from './pages/ajuda/ajuda.component';
import { ConfiguracoesComponent } from './pages/configuracoes/configuracoes.component';
import { FotografiaComponent } from './components/fotografia/fotografia.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { LoginComponent } from './pages/login/login.component';
import { PrincipalComponent } from './pages/principal/principal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Interceptor } from './interceptor/interceptor/interceptor.module';
import { NovaImagemComponent } from './components/nova-imagem/nova-imagem.component';
import { DragDropDirective } from './shared/directives/drag-drop.directive';

@NgModule({
  declarations: [
    AppComponent,
    GaleriaComponent,
    AjudaComponent,
    ConfiguracoesComponent,
    FotografiaComponent,
    LoginComponent,
    PrincipalComponent,
    NovaImagemComponent,
    DragDropDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    Interceptor,
    NgxSkeletonLoaderModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
