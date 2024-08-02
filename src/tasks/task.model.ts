export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}

export enum TaskStatus {
  OPEN = 'open',
  IN_Progress = 'IN_progress',
  DONE = 'Done',
}
