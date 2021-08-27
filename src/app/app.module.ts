import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { HomeBtnComponent } from './home-btn/home-btn.component';
import { PlateComponent } from './plate/plate.component';
import { MessageComponent } from './message/message.component';
import { NavComponent } from './nav/nav.component';
import { RegisterComponent } from './register/register.component';
import { DefaultComponent } from './components/default/default.component';
import { FarmersMarketComponent } from './farmers-market/farmers-market.component';
import { ExercisesComponent } from './exercises/exercises.component';

import { FoodGroupsModule } from './food-groups/food-groups.module';
import { AppRoutingModule } from './app-routing.module';
import { TodaysGoalComponent } from './todays-goal/todays-goal.component';

@NgModule({
  declarations: [ AppComponent, 
    HeaderComponent, 
    FooterComponent, 
    MainComponent, 
    HomeBtnComponent, 
    PlateComponent, 
    MessageComponent, 
    NavComponent, 
    RegisterComponent, DefaultComponent, FarmersMarketComponent, ExercisesComponent, TodaysGoalComponent],
  imports: [
    AppRoutingModule,
    CommonModule, 
    BrowserModule,
    FoodGroupsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
