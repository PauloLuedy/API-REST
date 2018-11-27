import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  contatoUrl = 'http://localhost:3000/api/clientes';
  

  constructor(private http: HttpClient) { }

  lista() {
    console.log(this.contatoUrl);

    return this.http.get<any[]>(`${this.contatoUrl}`);
   }

}
