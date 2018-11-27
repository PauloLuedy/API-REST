import { ContatoService } from './../contato.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-listagem',
  templateUrl: './component-listagem.component.html',
  styleUrls: ['./component-listagem.component.css']
})
export class ComponentListagemComponent implements OnInit {

  contatos: Array<any>;

  constructor(private contatoService: ContatoService) { }

  ngOnInit() {
    this.lista();
  }

  lista() {
    this.contatoService.lista().subscribe(dados => this.contatos = dados);
  }

}
