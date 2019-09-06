import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  getSubscribers() {
    return this.httpClient.get('api/subscribers');
  }
  addSubscribers(subscriber) {
    let httpheader = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    return this.httpClient.post('api/addsubscribers', subscriber, httpheader)
  }

}
