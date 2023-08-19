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
    const content = element.value;
    element.value = '';
    if (!content.trim()) return;
    const createTask: CreateTask = { content };
    this.taskService
      .createTask(createTask)
      .subscribe((task) => this.taskService.sendTask(task));
  }
}
