import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-comp',
  templateUrl: './search-comp.component.html',
  styleUrls: ['./search-comp.component.css']
})
export class SearchCompComponent implements OnInit {

   @Output()
   Search = new EventEmitter<string>();
   OnStudentSearch(searchTerm:string): void {  
    console.log(searchTerm);
    this.Search.emit(searchTerm);  
} 

  constructor() { }

  ngOnInit(): void {
  }

}
