import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../Model/produtos.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  apiUrl = 'http://localhost:8090/produtos';

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  };

  constructor(  
    private httpClient: HttpClient
    ) { }

    public getProdutos(): Observable<Produto> {
      return this.httpClient.get(this.apiUrl)
    }
}
