import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { User } from '../models/User';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class FoodGroupsGuardService implements CanActivateChild {

  currentUser: User;
  currentRoute;
  group;

  getRoute(group, metValue) {
    console.log(metValue);
    if(metValue === true) {
      alert(`You have eaten all your ${group} for the day`);
      return false;
    } else {
      return true;
    }

  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(route);
    console.log(route.queryParams);
    console.log(state.url);
    this.group = route.queryParams.group;
    this.currentUser = this.userService.getUser();
    const valueMet = this.group + 'Met';
    console.log(valueMet);
    return this.getRoute(this.group, this.currentUser.reqsStatus[valueMet]);
  }

  constructor(private userService: UserService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.currentRoute = this.activatedRoute;
   }
}
