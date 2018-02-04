import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SearchService {

  private loginSearch: Subject<string> = new Subject<string>() 

  constructor() { }

  searchLogin(login: string) {
    this.loginSearch.next(login);
  }

  clearSearchLogin() {
    this.loginSearch.next();
  }

  getSearchLogin(): Observable<any> {
      return this.loginSearch.asObservable();
  }

}
