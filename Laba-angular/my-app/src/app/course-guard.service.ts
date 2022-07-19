import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {UserService} from "./user.service";
import {AuthService} from "./auth.service";

@Injectable()
export class CourseGuardService implements CanActivate {

  constructor(private userService: AuthService, private router: Router) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // return true;

    if (this.userService.isAuthenticated()) {
      console.log(this.userService.isAuthenticated())
      return true
    } else {
      console.log(this.userService.isAuthenticated())
      // this.router.navigate(['/Login'])
      return false;
    }
  }

}
