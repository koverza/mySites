import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  loggedIn: boolean = false

  user = {
    email: '',
    password: '',
    isAuth: false
  }

  public getInfo() {
    return this.user
  }


  public login(email: string, password: string, isAuth: boolean) {
    this.loggedIn = isAuth
    localStorage.setItem('userIsAuth', String(isAuth))
    localStorage.setItem('userEmail', String(email))
    localStorage.setItem('userPassword', String(password))

    this.user = {
      email: email,
      password: password,
      isAuth: isAuth
    }

  }


  public logout() {
    this.loggedIn = false
    localStorage.removeItem('userIsAuth');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPassword')
    history.go(0)
  }


  constructor() {
  }
}
