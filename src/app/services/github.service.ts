import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from "./../models/user";

@Injectable()
export class GithubService {

  private url: string = 'https://api.github.com';

  constructor(
    private http: HttpClient
  ) { }

  searchUsers(userName: string): Observable<User[]> {
    const url = `${this.url}/search/users?q=${userName}`
    return this.http.get<User[]>(url);
  }

}
