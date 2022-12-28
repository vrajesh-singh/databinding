import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ChildForSubjectComponent } from './subandSubB/child-for-subject/child-for-subject.component';
import { ParentForSubjectComponent } from './subandSubB/parent-for-subject/parent-for-subject.component';
import { NotificationComponent } from './subandSubB/notification/notification.component';
import { SubjectServiceService } from './subandSubB/subject-service.service';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    ChildForSubjectComponent,
    ParentForSubjectComponent,
    NotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SubjectServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
