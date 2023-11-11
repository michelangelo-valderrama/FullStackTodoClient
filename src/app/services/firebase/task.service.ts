import { Injectable } from '@angular/core';
import { CreateTask, UpdateTask, Task } from '../../classes/task.class';
import { Observable, catchError, from, of, tap } from 'rxjs';
import {
  CollectionReference,
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
} from '@angular/fire/firestore';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // TODO: error messages
  taskRef: CollectionReference;

  constructor(private readonly firestore: Firestore) {
    this.taskRef = collection(this.firestore, 'tasks');
  }

  /** GET tasks */
  getTasks(): Observable<Task[]> {
    return (
      collectionData(this.taskRef, { idField: 'id' }) as Observable<Task[]>
    ).pipe(catchError(this.handleError()));
  }

  /** POST task */
  createTask(createTask: CreateTask) {
    return from(addDoc(this.taskRef, createTask)).pipe(
      // tap((docRef) => {
      //   console.log(docRef.id);
      // }),
      catchError(this.handleError())
    );
  }

  /** DELETE task */
  deleteTask(id: number) {
    const taskDocRef = doc(this.firestore, `tasks/${id}`);
    return from(deleteDoc(taskDocRef));
  }

  /** UPDATE task */
  updateTask(id: number, updateTask: UpdateTask) {}

  private handleError() {
    return (err: HttpErrorResponse) => {
      console.log(err);
      return of();
    };
  }
}
