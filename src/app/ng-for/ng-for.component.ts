import { Component, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  // styleUrls: ['./ng-for.component.css']
  styles : ['img { height:100px; width:100px;']
})
export class NgForComponent implements OnInit {
//  records=[];
   records=
   [
  {name :'Ajay' , marks : 90 , "country" :"UK",  img :"/assets/images/avengers.jpg"},
  {name :'Deepak' , marks : 89 , "country" :"USA",  img :"/assets/images/darkknight.jpg"},
  {name :'Sagar' , marks : 96 , "country" :"INDIA",  img :"/assets/images/dragon.jpg"}
   ];
  constructor() { }

  ngOnInit(): void {
  }
   getColor(country)
   {
     console.log(country);
      switch(country)
      {
        case 'UK' : 
        return 'green';
        case 'USA':
          return 'red';
          case 'INDIA':
          return 'yellow';
      }
   }
}
