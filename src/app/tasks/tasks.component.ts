import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/db/task.service';
import { Task, UpdateTask } from '../classes/task.class';

@Component({
  selector: 'x-tasks',
  templateUrl: './tasks.component.html',
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.getTasks();
  }

  getTasks() {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  updateTask(id: number, updateTask: UpdateTask) {
    this.taskService.updateTask(id, updateTask).subscribe(() => {
      const index = this.tasks.findIndex((t) => t._id === id);
      const newTask = Object.assign(this.tasks[index], updateTask);
      this.tasks[index] = newTask;
    });
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe(() => window.location.reload());
  }
}
