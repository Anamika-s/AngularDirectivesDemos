import { Component, OnInit ,Input , Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {
 @Input()
  data;
 @Output()
 onclick = new EventEmitter<string>();

 

  
  constructor() { }

  ngOnInit(): void {
  }

}
