import type { Merchandise } from "~/types/merchandise/merchandise.interface";
import { fetchAllMerchandises } from "~/api/merchandises";

export const useMerchandises = () => {
  const merchandises = ref<Merchandise[]>([]);
  const loading = ref<boolean>(true);
  const error = ref<string | null>(null);

  const loadMerchandises = async () => {
    loading.value = true;
    error.value = null;
    try {
      merchandises.value = await fetchAllMerchandises();
      // throw new Error("wrong~~");
    } catch (err: any) {
      error.value = err.message || "error fetching merchandises";
    } finally {
      loading.value = false;
    }
  };

  return { merchandises, loading, error, loadMerchandises };
};
