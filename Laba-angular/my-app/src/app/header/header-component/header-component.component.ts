import { Component, OnInit } from '@angular/core';
import {UserService} from "../../user.service";
import {Router} from "@angular/router";
import {AuthService} from "../../auth.service";

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {
  UserLogin: string | null | undefined

  constructor(private userService: UserService, private route: Router, private authService: AuthService) {}

  logoutClick() {
    this.authService.logout()
    return  this.userService.logout()

  }

  ngOnInit(): void {
    this.UserLogin = localStorage.getItem('userEmail')
  }

}
