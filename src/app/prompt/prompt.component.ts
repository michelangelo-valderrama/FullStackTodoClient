import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { CreateTask } from '../classes/task.class';

@Component({
  selector: 'x-prompt',
  templateUrl: './prompt.component.html',
  styleUrls: ['./prompt.component.css'],
})
export class PromptComponent {
  constructor(private taskService: TaskService) {}

  enterHandler(element: HTMLInputElement) {
    this.addTask(element.value);
    element.value = '';
  }

  addTask(content: string) {
    if (!content.trim()) return;
    const createTask: CreateTask = { content };
    this.taskService
      .createTask(createTask)
      .subscribe((res) => this.taskService.sendTasks(res));
  }
}
