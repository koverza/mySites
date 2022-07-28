import {Component, forwardRef, OnInit} from '@angular/core';
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
  providers:  [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LoginPageComponent),
      multi: true
    }
  ]
})
export class LoginPageComponent implements OnInit {

  userEmail: string = '';
  userPassword: string = '';


  constructor(private userService: UserService, private route: Router, private authService: AuthService) {


  }


  loginClick() {
    this.authService.login()
    return this.userService.login(`${this.userEmail}`, `${this.userPassword}`, true)

  }




  ngOnInit(): void {
  }

}
