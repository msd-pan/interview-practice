import type { Task } from "~/types/task/task.interface";
import type { TaskStatus } from "~/types/task/taskStatus.type";

export const retrieveTasks = async () => {
  const { data, error } = await useFetch<{ tasks: Task[]; ok: boolean }>(
    "/api/tasks/tasks"
  );

  if (error.value) {
    throw new Error("error retrieving data!");
  }

  return data.value?.tasks ?? [];
};

export const submitTaskStatus = async (
  id: number,
  newStatus: TaskStatus
): Promise<boolean> => {
  const { ok } = await $fetch("/api/tasks/tasks", {
    method: "POST",
    body: { id, newStatus },
  });
  return ok;
};
