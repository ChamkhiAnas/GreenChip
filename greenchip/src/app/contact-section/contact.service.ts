import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  constructor(private httpClient: HttpClient) { }



  sendEmail(mail) {
    let httphead = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpClient.post('api/sendingmail', mail, httphead)
  }

}
