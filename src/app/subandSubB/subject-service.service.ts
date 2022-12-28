import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectServiceService {
  constructor() { }
 sub=new BehaviorSubject<any>('This is the message!')

 use(data){
  this.sub.next(data)
 }
}
