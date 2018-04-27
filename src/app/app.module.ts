import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 


import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from 'angularfire2'; 
import { AngularFireDatabase } from 'angularfire2/database'; //importar


import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component'; //import and add to declarations
import { environment } from './../environments/environment';

import { tasksService } from './components/tasks/tasks.service'; //import


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), //import
    FormsModule
    
  ],
  providers: [
    AngularFireDatabase,//import
    tasksService //import
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
