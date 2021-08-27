import { Component, OnDestroy, OnInit } from '@angular/core';

import { TodaysGoalService } from '../services/todays-goal.service';

import { Subscription } from 'rxjs';
@Component({
  selector: 'fp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy {

  icon: string = 'assets/images/icons/icons-29.png'
  versionString: string = "1.0.0";
  logoAlt: string = 'FoodPlate logo';
  isCurrent: boolean = false;
  subscription: Subscription;
  goal: any;

  moreInfo() {
    alert('For more info see choosemyplate.gov')
  }

  constructor(private todaysGoalSerive: TodaysGoalService) {
    this.subscription = this.todaysGoalSerive.getGoal().subscribe(goal => {
      this.goal = goal;
    });
   }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
