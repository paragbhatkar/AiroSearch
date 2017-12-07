import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {UserdataService} from '../../services/userdata.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class UsersComponent implements OnInit {
  users: Array<any>;

  constructor(private _userdata: UserdataService) {
    this._userdata.getUsers().subscribe(res => this.users = res);
   }

  ngOnInit() {
  }


}
