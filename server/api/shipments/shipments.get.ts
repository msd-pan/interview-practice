import type { Shipment } from "~/types/shipment/shipment.type";
import { getShipments } from "~/server/handler/shipment.handler";

export default defineEventHandler(async (event) => {
  try {
    const data: Shipment[] = [
      { id: 1, name: "Apple", quantity: 1, destination: "rack1" },
      { id: 2, name: "Banana", quantity: 3, destination: "rack2" },
      { id: 3, name: "orange", quantity: 4, destination: "rack3" },
      { id: 4, name: "tangrine", quantity: 5, destination: "rack4" },
    ];

    // const data: Shipment[] = await getShipments();

    return {
      ok: true,
      data,
    };
  } catch (err) {
    console.error(err);
    return {
      ok: false,
      error: "Something went wrong",
    };
  }
});
