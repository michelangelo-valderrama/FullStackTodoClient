export interface Task {
  _id: number;
  title: string;
  done?: boolean;
}

export interface CreateTask {
  title: string;
}

export interface UpdateTask {
  title?: string;
  done?: boolean;
}
