import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from 
'@angular/forms';

@Component({
  selector: 'fp-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  goalForm: FormGroup;

  createForm(): void {
    this.goalForm = this.fb.group({
      id: [''],
      goalTitle: ['', Validators.required],
      dealine: ['', Validators.required],
      didIt: ['']
    });
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

}
