import { Injectable } from '@angular/core';
import { CreateTask, UpdateTask, Task } from '../../classes/task.class';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly apiUrl = 'http://localhost:3000/api/tasks';
  private readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  private taskMessage = new Subject<Task>();
  tasks$ = this.taskMessage.asObservable();

  constructor(private readonly http: HttpClient) {}

  sendTask(task: Task) {
    this.taskMessage.next(task);
  }

  getTasks() {
    return this.http.get<Task[]>(this.apiUrl);
  }

  createTask(createTask: CreateTask) {
    return this.http.post<Task>(this.apiUrl, createTask, this.httpOptions);
  }

  deleteTask(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`, this.httpOptions);
  }

  updateTask(id: string, updateTask: UpdateTask) {
    return this.http.patch<Task>(
      `${this.apiUrl}/${id}`,
      updateTask,
      this.httpOptions
    );
  }
}
