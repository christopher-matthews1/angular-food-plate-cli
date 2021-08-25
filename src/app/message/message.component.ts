import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/User';

@Component({
  selector: 'fp-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() user: User;

  // message: string = this.getMessage();

  fruitNeeded: string = 'You still have more fruit to eat.';
  fruitMet: string = 'You are all your fruit today!';
  vegNeeded: string = 'You still have more fruit to eat.';
  vegMet: string = 'You are all your vegtables today!';
  proteinNeeded: string = 'You still have more fruit to eat.';
  proteinMet: string = 'You are all your protein today!';
  grainNeeded: string = 'You still have more fruit to eat.';
  grainMet: string = 'You are all your grain today!';


  constructor() { }

  ngOnInit(): void {
  }

}
