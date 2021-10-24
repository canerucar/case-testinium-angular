import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl: string = 'https://jsonplaceholder.typicode.com';
  productID: any;

  constructor(private http: HttpClient) {}

  getUser(userId) {
    return this.http.get(
      'https://jsonplaceholder.typicode.com/users/' + userId
    );
  }

  getById(id):Observable<any>{
    const url = `${this.apiUrl}/users/${id}`;
    return this.http.get(url);
  }
}
