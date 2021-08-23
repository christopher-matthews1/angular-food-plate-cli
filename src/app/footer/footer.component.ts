import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  icon: string = 'assets/images/icons/icons-29.png'
  versionString: string = "1.0.0";
  logoAlt: string = 'FoodPlate logo';
  isCurrent: boolean = false;

  moreInfo() {
    alert('For more info see choosemyplate.gov')
  }

  constructor() { }

  ngOnInit(): void {
  }

}
