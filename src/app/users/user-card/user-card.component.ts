import { Component, OnInit, Input } from '@angular/core';
import { User } from "./../../models/user";

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {

  @Input() user: User;
  @Input() disableOnClick: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
