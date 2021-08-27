import { OnInit } from '@angular/core';
import { Component, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { User } from './models/User';
import { UserService } from './services/user.service';

@Component({
  selector: 'fp-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  // user: User;
  currentUser: User;

  constructor(private titleService: Title, 
              private userService: UserService) {}

  ngOnInit(): void {
    // this.user = this.userService.getUser();
    this.titleService.setTitle(`Welcome to FoodPlate!`)
    this.userService.getUser();
    this.userService.currentUser.subscribe(user => this.currentUser = user);
  }
}
