import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SearchService {

  private loginSearch: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor() { }

  searchLogin(login: string) {
    this.loginSearch.next(login);
  }

  clearSearchLogin() {
    this.loginSearch.next('');
  }

  getSearchLogin(): Observable<any> {
      return this.loginSearch.asObservable();
  }

}
