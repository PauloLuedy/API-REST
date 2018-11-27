import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ComponentListagemComponent } from './component-listagem/component-listagem.component';
import { ContatoService } from './contato.service';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ComponentListagemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ContatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
