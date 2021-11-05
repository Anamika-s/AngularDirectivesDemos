import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attribute-demo',
  templateUrl: './attribute-demo.component.html',
  styleUrls: ['./attribute-demo.component.css']
})
export class AttributeDemoComponent implements OnInit {

  myStyle={
    'background' :'red',
    'border' : '10px solid green'
    }
    myProp1:string ="15px";
    isActive:Boolean =false;
    multiClasses=
{class1:false,
class2:true,
class3:false,
}

  constructor() { }

  ngOnInit(): void {
  }

}
