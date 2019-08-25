import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './students';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  PHP_API_SERVER = "http://127.0.0.1:8080";

  readPolicies(): Observable<Student[]> {
    return this.httpClient.get<Student[]>(`${this.PHP_API_SERVER}/api/read.php`);
  }

  createPolicy(student: Student): Observable<Student> {
    return this.httpClient.post<Student>(`${this.PHP_API_SERVER}/api/create.php`, student);
  }
}
