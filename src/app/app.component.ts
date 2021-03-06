import { OnInit } from '@angular/core';
import { Component, ViewEncapsulation } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Requirement } from './models/requirement';
import { User } from './models/User';
import { RequirementsService } from './services/requirements.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'fp-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {

  currentUser: User;

  private requirements: Array<Requirement>;

  constructor(private titleService: Title, 
              private userService: UserService,
              private reqsService: RequirementsService) {}

  ngOnInit(): void {
    this.titleService.setTitle(`Welcome to FoodPlate!`)
    this.userService.getUser();
    this.userService.currentUser.subscribe(user => this.currentUser = user);
    // console.log(this.reqsService.getRequirements());
    this.reqsService.getRequirements().subscribe(
      reqs => {
        this.requirements = reqs;
        // console.table(this.requirements);
        // console.log(this.requirements[1].ageGroup);
      }
    );
  }
}
