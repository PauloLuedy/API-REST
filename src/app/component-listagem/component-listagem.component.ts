import { FormGroup } from '@angular/forms';
import { ContatoService } from './../contato.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-listagem',
  templateUrl: './component-listagem.component.html',
  styleUrls: ['./component-listagem.component.css']
})
export class ComponentListagemComponent implements OnInit {

  contatos: Array<any>;
  contato: any;

  constructor(private contatoService: ContatoService) {
    this.lista();

   }

  ngOnInit() {
    this.lista();
    this.contato = {};
  }

  lista() {
    this.contatoService.lista().subscribe(dados => this.contatos = dados);
  }

  Criar(frm: FormGroup) {
    this.contatoService.criar(this.contato).subscribe(resposta => {
      this.contatos.push(resposta);
      frm.reset();
    });
  }

  deletar(id: any) {
    this.contatoService.deletar(id).subscribe(resp => {
      this.lista();
    });
  }

}
