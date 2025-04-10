export interface Task {
  id: string;
  title: string;
  description: string;
  status: 'To Do' | 'In Progress' | 'Done';
}

export interface TaskFormData {
  title: string;
  description: string;
  status: Task['status'];
}