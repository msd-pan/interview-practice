import type { TaskStatus } from "~/types/task/taskStatus.type";

type updatedTaskStatusRequest = {
  id: number;
  status: string;
};

type updatedTaskStatusResponse = {
  ok: boolean;
  error?: string;
};

export default defineEventHandler(
  async (event): Promise<updatedTaskStatusResponse> => {
    try {
      const body = await readBody<updatedTaskStatusRequest>(event);
      // todo
      // submit the status
      const data = 1;

      return { ok: true };
    } catch (err) {
      console.error(err);
      return { ok: false, error: "something went wrong" };
    }
  }
);
