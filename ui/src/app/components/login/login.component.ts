import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { UserdataService } from './../../services/userdata.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean;

  constructor(private UserService: UserdataService,
    private router: Router) { }

  ngOnInit() {
  }

  logIn(oUser) {
    console.log(JSON.stringify(oUser));
    this.UserService.authenticateUser(oUser).subscribe(
      result => {
        console.log(result);
        if (result.success)
          this.router.navigate(['/airlines']);
        else
          this.invalidLogin = true;

      }
    )
  }

}
