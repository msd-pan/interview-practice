import { updateShipmentById } from "~/server/handler/shipment.handler";

type UpdateShipmentRequest = {
  ids: number[];
};

type UpdateShipmentResponse = {
  ok: boolean;
  updated?: number;
  error?: string;
};

export default defineEventHandler(
  async (event): Promise<UpdateShipmentResponse> => {
    try {
      const body = await readBody<UpdateShipmentRequest>(event);
      console.log(body);
      //   const result = await updateShipmentById(body.ids);
      const result = { updatedCount: 1 };

      return {
        ok: true,
        updated: result.updatedCount,
      };
    } catch (err) {
      console.error("POST /api/shipments error:", err);

      return {
        ok: false,
        error: "Something went wrong",
      };
    }
  }
);
