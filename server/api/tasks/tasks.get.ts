import type { Task } from "~/types/task/task.interface";

export default defineEventHandler(async (event) => {
  try {
    // const tasks: Task[] = await getTasksFromDb();
    const tasks: Task[] = [
      { id: 1, status: "created", createdAt: "2025-4-14" },
      { id: 2, status: "assigned", createdAt: "2025-4-15" },
      { id: 3, status: "in_progress", createdAt: "2025-4-16" },
      { id: 4, status: "completed", createdAt: "2025-4-17" },
      { id: 5, status: "assigned", createdAt: "2025-4-17" },
      { id: 6, status: "in_progress", createdAt: "2025-4-17" },
    ];

    return {
      tasks,
      ok: true,
    };
  } catch (err) {
    console.error(err);
    return { ok: false, err };
  }
});
