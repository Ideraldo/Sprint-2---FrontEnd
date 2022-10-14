import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Email } from '../Model/email.model';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  apiUrl = 'http://localhost:8080/emails';

  httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
  ) { }

  public getEmails(): Observable<Email> {
    return this.httpClient.get(this.apiUrl)
  }
}
