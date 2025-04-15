<template>
  <ul>
    <li v-for="task in tasks" :key="task.id">
      {{ task.id }}:{{ task.createdAt }} {{ task.status }}

      <button
        v-if="task.status === 'assigned' || task.status === 'in_progress'"
        @click="handleSubmitTask(task.id, task.status)"
      >
        task{{ task.status === "assigned" ? " start" : " complete" }}
      </button>
    </li>
  </ul>
</template>
<script lang="ts" setup>
import type { TaskStatus } from "~/types/task/taskStatus.type";
import { useTasks } from "~/composables/useTasks";

const { tasks, loading, loadTasks, updateTaskStatus } = useTasks();

const handleSubmitTask = async (id: number, taskStatus: TaskStatus) => {
  await updateTaskStatus(id, taskStatus);
};

onMounted(async () => {
  await loadTasks();
  console.log(tasks.value);
});
</script>
