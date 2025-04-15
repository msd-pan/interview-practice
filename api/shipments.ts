import type { Shipment } from "~/types/shipment/shipment.type";

type ShipmentResponse = {
  ok: boolean;
  data: Shipment[];
};

export const retriveShipments = async () => {
  const { data, error } = await useFetch<ShipmentResponse>(
    "/api/shipments/shipments"
  );

  if (error.value) {
    throw new Error("something went wrong fetching shipments");
  }

  return data.value?.data ?? [];
};

export const submitUpdatedShipments = async (shipments: number[]) => {
  await $fetch("/api/shipments/shipments", {
    method: "POST",
    body: { shipments },
  });
};
