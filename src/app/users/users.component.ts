import { Component, OnInit } from '@angular/core';
import { User } from "./../models/user";
import { GithubService } from '../services/github.service';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: User[];

  constructor(
    private githubService: GithubService,
    private searchService: SearchService
  ) { }

  ngOnInit() {
    this.searchService.getSearchLogin().subscribe((login: string) => {
      this.searchUsers(login);
    })
  }

  searchUsers(login: string) {
    this.githubService.searchUsers(login).subscribe(response => {
      this.users = response['items'];
    })
  }

}
