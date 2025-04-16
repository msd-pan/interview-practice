import type { Task } from "~/types/task/task.interface";
import type { TaskStatus } from "~/types/task/taskStatus.type";
import { canStartTask, canCompleteTask } from "~/utils/taskStatus";
import { retrieveTasks, submitTaskStatus } from "~/api/tasks";

export const useTasks = () => {
  const tasks = ref<Task[]>([]);
  const loading = ref(false);
  const error = ref<string | null>(null);

  const loadTasks = async () => {
    loading.value = true;
    error.value = null;
    try {
      tasks.value = await retrieveTasks();
    } catch (err: any) {
      error.value = err.message || "failed fetching tasks";
    } finally {
      loading.value = false;
    }
  };

  const updateTaskStatus = async (id: number, taskStatus: TaskStatus) => {
    const index = tasks.value.findIndex((t: Task) => t.id === id);
    if (index === -1) {
      console.error(`Task with ${id} not found`);
      return;
    }

    let newStatus: TaskStatus | null = null;
    if (canStartTask(taskStatus)) {
      newStatus = "in_progress";
    } else if (canCompleteTask(taskStatus)) {
      newStatus = "completed";
    }

    if (!newStatus) return;

    const ifSuccess = await submitTaskStatus(id, taskStatus);

    if (ifSuccess) {
      tasks.value[index].status = newStatus;
    } else {
      console.warn(`Failed to update task #${id} to ${newStatus}`);
    }
  };

  return { tasks, loading, error, loadTasks, updateTaskStatus };
};
