export interface Task {
  _id: string;
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
