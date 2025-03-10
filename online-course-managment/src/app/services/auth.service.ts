// // import { HttpClient } from '@angular/common/http';
// // import { Injectable } from '@angular/core';
// // import { Observable } from 'rxjs';

// // @Injectable({
// //   providedIn: 'root'
// // })
// // export class AuthService {
// //   private apiUrl = 'http://localhost:3000/api/auth';

// //   constructor(private http: HttpClient) { }

// //   register(name: string, email: string, password: string, role: string): Observable<any> {
// //     return this.http.post(`${this.apiUrl}/register`, { name, email, password, role });
// //   }

// //   login(email: string, password: string): Observable<any> {
// //     return this.http.post(`${this.apiUrl}/login`, { email, password });
// //   }
// // }

// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthService {
//   private apiUrl = 'http://localhost:3000/api/auth';

//   constructor(private http: HttpClient) { }

//   register(name: string, email: string, password: string, role: string): Observable<any> {
//     return this.http.post(`${this.apiUrl}/register`, { name, email, password, role });
//   }

//   login(email: string, password: string): Observable<any> {
//     return this.http.post(`${this.apiUrl}/login`, { email, password });
//   }
// }


import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) { }

  register(name: string, email: string, password: string, role: string): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(`${this.apiUrl}/register`, { name, email, password, role }, { headers, observe: 'response' });
  }

  login(email: string, password: string): Observable<HttpResponse<any>> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(`${this.apiUrl}/login`, { email, password }, { headers, observe: 'response' });
  }
}