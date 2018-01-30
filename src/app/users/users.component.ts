import { Component, OnInit } from '@angular/core';
import { User } from "./../models/user";
import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public userName: string;
  public users: User[];

  constructor(
    private githubService: GithubService
  ) { }

  ngOnInit() {
  }

  searchUsers() {
    this.githubService.searchUsers(this.userName).subscribe(response => {
      this.users = response['items'];
    })
  }

}
