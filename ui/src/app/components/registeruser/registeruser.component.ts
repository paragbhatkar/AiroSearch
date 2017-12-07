import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { UserdataService } from '../../services/userdata.service';
import { User } from '../../Model/ui-user'

@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisteruserComponent implements OnInit {
  USER: User;
  first_name: string;
  last_name: string;
  user_name: string;
  password: string;

  constructor(private UserService: UserdataService) { }

  ngOnInit() {
  }

log(x){
  console.log(x);
}

  onSubmitRegistration() {
    console.log('in submit method');
    this.USER = new User();

    this.USER.firstName = this.first_name;
    this.USER.lastName = this.last_name;
    this.USER.userName = this.user_name;
    this.USER.password = this.password;
    console.log('in submit method 1');
    this.UserService.registerUser(this.USER).subscribe(data => {
      if (data.success) {
        console.log('User registerd.');
      }
      else {
        console.log('Error in User registration!!');
      }
    });
    return false;
  }

}
