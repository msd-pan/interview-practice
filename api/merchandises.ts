import type { Merchandise } from "~/types/merchandise/merchandise.interface";

type MerchandiseResponse = { ok: boolean; data: Merchandise[] };

export const fetchAllMerchandises = async (): Promise<Merchandise[]> => {
  const { data, error } = await useFetch<MerchandiseResponse>(
    "/api/merchandise"
  );

  if (error.value) {
    throw new Error("something went wrong fetching all merchandises");
  }

  return data.value?.data ?? [];
};
