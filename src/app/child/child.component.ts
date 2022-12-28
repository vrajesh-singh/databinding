import { inject } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
count=0;
  constructor() { }

  ngOnInit(): void {
  }
  inc(){
    this.count=this.count+1;

  }
  dec(){
    this.count=this.count-1;

  }

  

}
