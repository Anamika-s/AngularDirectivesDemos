import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-comp',
  templateUrl: './main-comp.component.html',
  styleUrls: ['./main-comp.component.css']
})
export class MainCompComponent implements OnInit {
  name : string ="Deepak";
  constructor() { }
  function1()
  {
    console.log("Called");
  }
  functionthatwillbeinvokedfromchild(value : any)
  {console.log(value);
    console.log("Called from Child Compoment");
  }
  ngOnInit(): void {
  }

}
