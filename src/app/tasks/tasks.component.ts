import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task, TaskId, UpdateTask } from '../classes/task.class';

@Component({
  selector: 'x-tasks',
  templateUrl: './tasks.component.html',
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.getTasks();
    this.taskService.tasks$.subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  getTasks() {
    this.taskService.getTasks().subscribe((res) => {
      this.tasks = res;
    });
  }

  deleteTask(id: TaskId) {
    this.taskService.deleteTask(id).subscribe((res) => {
      this.tasks = res;
    });
  }

  updateTask(id: TaskId, updateTask: UpdateTask) {
    this.taskService
      .updateTask(id, updateTask)
      .subscribe((res) => (this.tasks = res));
  }
}
