import type { TaskStatus } from "~/types/task/taskStatus.type";

export const canStartTask = (status: TaskStatus) => {
  return status === "assigned";
};

export const canCompleteTask = (status: TaskStatus) => {
  return status === "in_progress";
};
