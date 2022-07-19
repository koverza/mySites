import {Component, OnInit} from '@angular/core';
import {UserService} from "../user.service";
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  userEmail: string = '';
  userPassword: string = '';


  constructor(private userService: UserService, private route: Router, private authService: AuthService) {


  }


  loginClick() {
    // this.route.navigate(['/Courses'])
    this.authService.login()
    return this.userService.login(`${this.userEmail}`, `${this.userPassword}`, true)

  }


  ngOnInit(): void {
  }

}
