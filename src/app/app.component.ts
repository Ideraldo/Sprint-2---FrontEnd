import { Component, OnInit } from '@angular/core';
import { Email } from './shared/Model/email.model';
import { EmailService } from './shared/service/email.service';
import { ProdutoService } from './shared/service/produto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  emails: any;
  produtos: any;

  constructor(
    public emailService: EmailService,
    public produtoService: ProdutoService
  ){}


  ngOnInit(): void {
    this.getEmails();
    this.getProdutos();
  }

  getEmails(){
    this.emailService.getEmails().subscribe(response => {
    this.emails = response;
   });
  }

  getProdutos(){
    this.produtoService.getProdutos().subscribe(response => {
      this.produtos = response;
    })
  }

  title = 'Sprint4FRONT';
}
