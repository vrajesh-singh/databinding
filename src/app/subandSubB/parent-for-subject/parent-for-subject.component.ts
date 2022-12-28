import { Component, OnInit } from '@angular/core';
import { SubjectServiceService } from '../subject-service.service';

@Component({
  selector: 'app-parent-for-subject',
  templateUrl: './parent-for-subject.component.html',
  styleUrls: ['./parent-for-subject.component.css']
})
export class ParentForSubjectComponent implements OnInit {
  data: any
  constructor(private ss: SubjectServiceService) { }
  ngOnInit(): void {}
  show(e) {this.data = this.ss.use(e);}
}
