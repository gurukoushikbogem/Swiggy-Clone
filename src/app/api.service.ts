import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  
  private apiUrl = 'https://6717e698b910c6a6e02a8097.mockapi.io/users';

  constructor(private http: HttpClient) {}

  createUser(userData: {
    phoneNumber: string;
    name: string;
    email: string;
  }): Observable<any> {
    return this.http.post(this.apiUrl, userData);
  }

  loginUser(phoneNumber: string): Observable<any[]> {
    const url = `https://6717e698b910c6a6e02a8097.mockapi.io/users?phoneNumber=${phoneNumber}`;
    return this.http.get<any[]>(url);
  }

}
