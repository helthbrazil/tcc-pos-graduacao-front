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

@NgModule({
  declarations: [
    AppComponent,
    GaleriaComponent,
    AjudaComponent,
    ConfiguracoesComponent,
    FotografiaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
