import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Conference } from '../../models/conference';
@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  //attribute
  title: string;
  listConferences: Conference[];
  searchTitle: string;

  //1- 1 method() to be executed in order
  //to create an instance Home
  constructor() {
  }
  //2- Second method() to be executed
  ngOnInit() {
    this.title = 'Home 4DAS 9';
    this.listConferences=[
      {id:1,
        title: "Angular Conference",
        description:"Angular Conference Developer",
        address:"ESPRIT-Tunisia",
        nbr_Max: 50,
        nbr_Participation:48,
        date:"10-12-2026",
        picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv8Q9Y17iP9yV07pJQIuBtfKqoy5nKcP_GiIamFG9udg&s=10"
      },
      {id:2,
        title: "Angular React",
        description:"Angular Conference Developer",
        address:"ESPRIT-Tunisia",
        nbr_Max: 50,
        nbr_Participation:50,
        date:"10-11-2026",
        picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5agxXUSsI3J6nJYssKdxaZEO5xpTCsh4P6U4qKGXH2w&s=10"}
    ]
  }


  participate(conference: Conference): void {
    conference.nbr_Participation++;
  }

}
