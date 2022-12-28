// *********************@viewChild*****************************************

// import { Component, ElementRef, ViewChild } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   @ViewChild('Temp') Marked:ElementRef

//   title = 'dataTransfer';

//   constructor(){
//   }
//   ngAfterViewInit(){
//     this.Marked.nativeElement.style.color="red";
//   }
// }
import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { ChildComponent } from './child/child.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  @ViewChildren(ChildComponent) _childComponent: QueryList<any>
  @ViewChild(ChildComponent) cc:any
  title = 'dataTransfer';
  aa:any
  data: any;
  constructor(){
  }
// ***********************ReplaySubject*************************************
//  ngOnInit(){
//   const $replay1=new ReplaySubject();
//   $replay1.next('hello...');
//   $replay1.next('Vrajesh...');
//   $replay1.next('Singh...');
//   $replay1.next('How ...');
//   $replay1.next('are...');
//   $replay1.next('you?...');
//   $replay1.subscribe(res=>{
//   console.log("this is =",res); 
// });
//  }
// ***********************ReplaySubject*************************************

ngOnInit(){
  const $replay1=new Subject<any>();

  $replay1.subscribe(res=>console.log(res));

  $replay1.next('hello...');
  $replay1.next('Vrajesh...');
  $replay1.next('Singh...');
  $replay1.next('How ...');
  $replay1.next('are...');
  $replay1.next('you?...');
 }



  // increment(){
  //   // this._childComponent.first.inc();
  //   this._childComponent.forEach(el=>el.inc());
  // }
  // decrement(){
  //   // this._childComponent.first.dec();

  //   this._childComponent.forEach(el=>el.dec());

  // }



  

} 





// *********************@viewChildren*****************************************

// import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   @ViewChildren('Temp') Marked:QueryList<any>
//   @ViewChildren('Temp') kk:QueryList<any>


//   title = 'dataTransfer';
// aa:any;
//   constructor(){
//   }
//   ngAfterViewInit(){
//     console.log(this.Marked);
//     this.Marked.first.nativeElement.style.color="red";
//     this.kk.first.nativeElement.value="vrajesh";
//       }
// set(){
//   // this.Marked.last.nativeElement.style.color="blue";
//   // this.Marked.nativeElement.style.color='red';
// }
// } 


// *********************@viewChildren*****************************************

// import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
// import { ChildComponent } from './child/child.component';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent{
//   @ViewChildren(ChildComponent) _childComponent: QueryList<any>
//   @ViewChild(ChildComponent) cc:any
//   title = 'dataTransfer';
//   aa:any
//   constructor(){
//   }

//   increment(){
//     // this._childComponent.first.inc();
//     this._childComponent.forEach(el=>el.inc());
//   }
//   decrement(){
//     // this._childComponent.first.dec();

//     this._childComponent.forEach(el=>el.dec());

//   }

// } 


