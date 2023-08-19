import { Component } from '@angular/core';
import { TaskService } from '../services/db/task.service';
import { CreateTask } from '../classes/task.class';

@Component({
  selector: 'x-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css'],
})
export class PromptComponent {
  constructor(private taskService: TaskService) {}

  addTask(element: HTMLInputElement) {
    const title = element.value;
    element.value = '';
    if (!title.trim()) return;
    const createTask: CreateTask = { title };
    this.taskService
      .createTask(createTask)
      .subscribe((task) => this.taskService.sendTask(task));
  }
}
