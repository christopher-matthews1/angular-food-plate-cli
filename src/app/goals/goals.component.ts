import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from 
'@angular/forms';
import { Goal } from '../models/Goal';
import { GoalsService } from '../services/goals.service';

@Component({
  selector: 'fp-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  goalForm: FormGroup;
  goal: Goal;
  allGoals: Goal[];
  errorMessage: string;
  isLoading: boolean;
  activeGoal: Goal;
  newGoalForm: boolean = false;

  showEditGoalForm(goal: Goal): void {
    this.newGoalForm = true;
    this.getGoal(goal.id);
    this.showGoalAddEditForm(true);
  }

  showAddGoalForm(): void {
    this.showGoalAddEditForm(true);
    this.resetGoalForm();
  }

  showGoalAddEditForm(showForm: boolean) {
    this.newGoalForm = showForm;
  }

  toggleGoalComplete(goal: Goal): void {
    goal.didIt = !goal.didIt;
  }

  resetGoalForm(): void {
    this.goalForm.reset();
  }

  createForm(): void {
    this.goalForm = this.fb.group({
      id: [''],
      goalTitle: ['', Validators.required],
      deadline: ['', Validators.required],
      didIt: ['']
    });
  }

  getGoal(id): void {
    this.goalService.getGoalById(id).subscribe(
      goal => this.goalRetrieved(goal),
      error => console.log(error)
    );
  }

  goalRetrieved(goal): void {
    this.goal = goal;
    this.goalForm.setValue({
      id: this.goal.id,
      deadline: this.goal.deadline,
      didIt: this.goal.didIt,
      goalTitle: this.goal.goalTitle
    });
   }

  deleteGoal(goal): void {
    this.goalService.deleteGoalById(goal.id)
    .subscribe(goal => this.goalService.getGoals());
  }

  deleteCompleted(): void {
    const completedGoals = this.allGoals.filter(goals => goals.didIt === 
    true).map(goals => this.deleteGoal(goals));
      console.log(completedGoals);
  }
   
  insertGoal(goal: Goal): void {
    this.goalService.addGoal(goal)
      .subscribe(goal => {
    this.goalService.getGoals();
      },
      (error) => console.log(error)
      );
    }
  updateGoal(goal: Goal): void {
    this.goalService.updateGoal(goal)
      .subscribe(goal => this.goalService.getGoals());
  }

  toggleAccomplished(): void {
    console.log(`toggleAccomplished called`);
    this.goalForm.patchValue({didIt: true});
  }

  submitGoal(goal: Goal): void {
    console.log(`submitGoal called`);
    if(this.goalForm.invalid) {
      console.log(`submitGoal(): this.goalForm.invalid = true`);
      return;
    }
    this.showGoalAddEditForm(false);
    // Insert
    if(goal.id === null || goal.id < 1) {
    this.insertGoal(goal);
    }
    // Update
    else {
    this.updateGoal(goal);
    }
  }
   

  constructor(private fb: FormBuilder, private goalService: GoalsService) {
    this.createForm();
   }

  ngOnInit(): void {
    // this.createForm();
    this.goalService.getGoals().subscribe((response: any) => {
      this.allGoals = response;
      console.log(this.allGoals);
    },
    err => {
      this.errorMessage = err;
      console.log(err);
      this.isLoading = false
    },
    () => {
      this.isLoading = false
    });
  }

}
