export interface Task {
  id: TaskId;
  content: string;
  done: boolean;
}

export interface CreateTask {
  content: string;
}

export interface UpdateTask {
  content?: string;
  done?: boolean;
}

export type TaskId = `${string}-${string}-${string}-${string}`;
