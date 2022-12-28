import { Component, OnInit } from '@angular/core';
import { SubjectServiceService } from '../subject-service.service';

@Component({
  selector: 'app-child-for-subject',
  templateUrl: './child-for-subject.component.html',
  styleUrls: ['./child-for-subject.component.css']
})
export class ChildForSubjectComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
