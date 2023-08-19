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
    this.taskService.tasks$.subscribe((task) => {
      this.tasks.push(task);
    });
  }

  getTasks() {
    this.taskService.getTasks().subscribe((tasks) => {
      this.tasks = tasks;
    });
  }

  deleteTask(id: string) {
    this.taskService.deleteTask(id).subscribe(() => {
      this.tasks = this.tasks.filter((t) => t._id !== id);
    });
  }

  updateTask(id: string, updateTask: UpdateTask) {
    this.taskService.updateTask(id, updateTask).subscribe(() => {
      const index = this.tasks.findIndex((t) => t._id === id);
      const newTask = Object.assign(this.tasks[index], updateTask);
      this.tasks[index] = newTask;
    });
  }
}
