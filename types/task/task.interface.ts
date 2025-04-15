import type { TaskStatus } from "./taskStatus.type";

export interface Task {
  id: number;
  status: TaskStatus;
  createdAt: string;
}
