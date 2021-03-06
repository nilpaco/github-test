import { Component, OnInit, OnDestroy } from '@angular/core';
import { User } from "./../models/user";
import { GithubService } from '../services/github.service';
import { SearchService } from '../services/search.service';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/finally';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  public users: User[];
  public loading: boolean;
  public subscription;

  constructor(
    private githubService: GithubService,
    private searchService: SearchService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.subscription = this.searchService.getSearchLogin()
      .subscribe((login: string) => {
        if (!login && this.route.snapshot.queryParams.login) {
          this.searchUsers(this.route.snapshot.queryParams.login);
        } else {
          this.searchUsers(login);
        }
      });
  }

  searchUsers(login: string) {
    if (login) {
      this.loading = true;
      this.githubService.searchUsers(login).subscribe(response => {
        this.loading = false;
        this.users = response['items'];
      })
    } else {
      this.users = [];
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
}

}
