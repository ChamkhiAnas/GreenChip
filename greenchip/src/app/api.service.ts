import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getSubscribers() {
    return this.httpClient.get('http://localhost:3200/api/subscribers');
  }
  addSubscribers(subscriber) {
    let httpheader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpClient.post('http://localhost:3200/api/addsubscribers', subscriber, httpheader)
  }

}
