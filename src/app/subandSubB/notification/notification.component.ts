import { Component, OnInit } from '@angular/core';
import { SubjectServiceService } from '../subject-service.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

data:any
  constructor(private _sub:SubjectServiceService) { }

  ngOnInit(): void {
this._sub.sub.subscribe(res=>this.data=res);
  }


}
