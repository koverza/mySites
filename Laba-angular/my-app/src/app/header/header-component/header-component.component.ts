import { Component, OnInit } from '@angular/core';
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {
  UserLogin: string | null | undefined

  constructor(private userService: UserService, private route: Router, private authService: AuthService) {}

  logoutClick() {
    // this.authService.logout()
    // this.route.navigate(['/login'])
    return  this.userService.logout()

  }

  ngOnInit(): void {
    this.UserLogin = localStorage.getItem('userEmail')
  }

}
