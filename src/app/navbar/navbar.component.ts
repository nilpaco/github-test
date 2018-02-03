import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';
import { Subject } from 'rxjs/Subject';
import { SearchService } from '../services/search.service';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  public login: string;
  private loginDebounce: Subject<string> = new Subject<string>();

  constructor(
    private githubService: GithubService,
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.loginDebounce
      .debounceTime(700)
      .distinctUntilChanged()
      .subscribe((login: string) => this.searchService.searchLogin(login))
  }

  search(login: string): void {
    this.loginDebounce.next(this.login);
  }

}
