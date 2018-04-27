import { Component, OnInit, Input } from '@angular/core';

import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable'; 

import { tasksService } from './tasks.service';
import { Task } from './task.model';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})

export class TasksComponent implements OnInit {

  items: Observable<any[]>;
  task: Task = new Task;

  constructor(private tasks: tasksService) {
  }

  ngOnInit() {
    this.items = this.tasks.getTasks();
  }

  addItem(newName: string) {
    this.tasks.addItem(newName);
  }

  updateItem(key: string , newName: string) {
    this.tasks.updateItem(key,newName);
  }

  deleteItem(key: string) {
    this.tasks.deleteItem(key);
  }

  deleteAll(){
    this.tasks.deleteEverything();
  }

}



