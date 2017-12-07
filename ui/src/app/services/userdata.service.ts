import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class UserdataService {
  result: any;
  authToken: any;
  user: any;
  isDev: any;

  constructor(private _http: Http) { this.isDev = true; }

  getUsers() {
    return this._http.get("/api/users")
      .map(result => this.result = result.json().data);
  }

  registerUser(user) {
    console.log(user);
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    let userEndPoint = this.prepEndpoint('http://localhost:8000/api/register');
    return this._http.post(userEndPoint, user, { headers: headers }).map(res => res.json());
  }

  authenticateUser(user) {
    console.log(user);
    let headers = new Headers();
    headers.append('content-type', 'application/json');
    let userEndPoint = this.prepEndpoint('http://localhost:8000/api/login');
    return this._http.post(userEndPoint, user, { headers: headers }).map(res => res.json());
  }

  prepEndpoint(ep) {
    if (this.isDev) {
      return ep;
    } else {
      return 'http://localhost:8080/' + ep;
    }
  }
}
