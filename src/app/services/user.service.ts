import { Injectable, OnInit, Optional } from '@angular/core';

import { User } from '../models/User';
import { UserStatusService } from './user-status.service';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  private user: User = new User(1, 'Chris', 'M', '51+', 'M51+', {}, 
{fruitMet: false, vegMet: false, proteinMet: false, grainMet: 
false}, false, 'chris@chris123.com');

getUser(): User {
  return this.user;
}

  constructor(@Optional() private userStatusService: UserStatusService) {
    this.userStatusService.getUserStatus(this.user);
  }

  ngOnInit() {

  }
}
