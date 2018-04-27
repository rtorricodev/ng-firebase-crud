import { Task } from './task.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable'; 
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import * as firebaseConfig from 'firebase';

@Injectable()
export class tasksService {
    itemsRef: AngularFireList<any>;
    
    constructor(private db: AngularFireDatabase) {
        this.itemsRef = this.db.list('tasks'); 
    }


    getTasks(): Observable<any[]> {
       return  this.itemsRef.snapshotChanges().map(value => {
        return value.map (
            val => ({ 
                key: val.payload.key, 
                ... val.payload.val() 
            }));
        });
    }

    addItem(newName: string) {
        this.itemsRef.push({ text: newName });
    }

    updateItem(key: string, newText: string) {
        this.itemsRef.update(key, { text: newText });
    }

    deleteItem(key: string) {    
        this.itemsRef.remove(key); 
    }

    deleteEverything() {
        this.itemsRef.remove();
    }
}



