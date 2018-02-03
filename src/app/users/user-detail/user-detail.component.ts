import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  public user: User;

  constructor(
    private githubService: GithubService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.getUser(params['login']);
    })
  }

  getUser(login: string): void {
    this.githubService.getUser(login).subscribe(result => {
      this.user = result;
      this.get(this.user.followers_url, 'followersList')
      this.get(this.user.repos_url, 'reposList')
    })
  }

  get(url: string, entityName: string): void {
    this.githubService.get(url).subscribe(result => {
      this.user[entityName] = result;
    })
  }

}
