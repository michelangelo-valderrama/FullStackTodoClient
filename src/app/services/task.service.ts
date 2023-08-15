import { Injectable } from '@angular/core';
import { TaskId, CreateTask, UpdateTask, Task } from '../classes/task.class';
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
  private tasksMessage = new Subject<Task[]>();
  tasks$ = this.tasksMessage.asObservable();

  constructor(private readonly http: HttpClient) {}

  sendTasks(tasks: Task[]) {
    this.tasksMessage.next(tasks);
  }

  getTasks() {
    return this.http.get<Task[]>(this.apiUrl);
  }

  createTask(createTask: CreateTask) {
    return this.http.post<Task[]>(this.apiUrl, createTask, this.httpOptions);
  }

  deleteTask(id: TaskId) {
    return this.http.delete<Task[]>(`${this.apiUrl}/${id}`, this.httpOptions);
  }

  updateTask(id: TaskId, updateTask: UpdateTask) {
    return this.http.patch<Task[]>(
      `${this.apiUrl}/${id}`,
      updateTask,
      this.httpOptions
    );
  }
}
