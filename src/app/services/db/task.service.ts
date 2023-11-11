import { Injectable } from '@angular/core';
import { CreateTask, UpdateTask, Task } from '../../classes/task.class';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Subject, catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // TODO: error messages
  private readonly tasksUrl = 'http://localhost:3000/api/tasks';
  private readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  private taskMessage = new Subject<Task>();
  tasks$ = this.taskMessage.asObservable();

  constructor(private readonly http: HttpClient) {}

  /** Send a task to other component */
  sendTask(task: Task) {
    this.taskMessage.next(task);
  }

  /** GET tasks */
  getTasks() {
    return this.http
      .get<Task[]>(this.tasksUrl)
      .pipe(catchError(this.handleError()));
  }

  /** POST task */
  createTask(createTask: CreateTask) {
    return this.http
      .post<Task>(this.tasksUrl, createTask, this.httpOptions)
      .pipe(catchError(this.handleError()));
  }

  /** DELETE task */
  deleteTask(id: number) {
    return this.http
      .delete(`${this.tasksUrl}/${id}`, this.httpOptions)
      .pipe(catchError(this.handleError()));
  }

  /** UPDATE task */
  updateTask(id: number, updateTask: UpdateTask) {
    return this.http
      .patch<Task>(`${this.tasksUrl}/${id}`, updateTask, this.httpOptions)
      .pipe(catchError(this.handleError()));
  }

  private handleError() {
    return (err: HttpErrorResponse) => {
      console.log(err);
      return of();
    };
  }
}
