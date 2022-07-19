import {Component} from '@angular/core';
import {CartService} from "./cart.service";
import {UserService} from "./user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CartService, UserService]
})
export class AppComponent {
  title = 'my-app';

  Authorization: string | null


  // Authorization = localStorage.getItem('userIsAuth')


  constructor(private userService: UserService) {


    this.Authorization = localStorage.getItem('userIsAuth')

  }


}
