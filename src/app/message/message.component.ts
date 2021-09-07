import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'fp-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  currentUser: User;

  getName():string {
    if(localStorage.getItem('currentUser')) {
      return JSON.parse(localStorage.getItem('currentUser')).firstname;
    }
    return "";
  }

  fruitNeeded: string = 'You still have more fruit to eat';
  fruitMet: string = 'You are all your fruit today';
  vegNeeded: string = 'You still have more vegtables to eat';
  vegMet: string = 'You are all your vegtables today';
  proteinNeeded: string = 'You still have more protein to eat';
  proteinMet: string = 'You are all your protein today';
  grainNeeded: string = 'You still have more grain to eat';
  grainMet: string = 'You are all your grain today';


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => this.currentUser = user);
  }

}
