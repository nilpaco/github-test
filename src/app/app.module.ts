import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { GithubService } from './services/github.service';
import { UserCardComponent } from './users/user-card/user-card.component';
import { UsersComponent } from './users/users.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchService } from './services/search.service';

@NgModule({
  declarations: [
    AppComponent,
    UserCardComponent,
    UsersComponent,
    UserDetailComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    GithubService,
    SearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
