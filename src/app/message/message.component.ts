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

  // message: string = this.getMessage();

  fruitNeeded: string = 'You still have more fruit to eat ' + this.getName();
  fruitMet: string = 'You are all your fruit today ';
  vegNeeded: string = 'You still have more fruit to eat ';
  vegMet: string = 'You are all your vegtables today ';
  proteinNeeded: string = 'You still have more fruit to eat ';
  proteinMet: string = 'You are all your protein today ';
  grainNeeded: string = 'You still have more fruit to eat ';
  grainMet: string = 'You are all your grain today ';


  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => this.currentUser = user);
  }

}
