import type { Merchandise } from "~/types/merchandise/merchandise.interface";

export const useMerchandiseList = (merchandises: Ref<Merchandise[]>) => {
  const sortOrder = ref<"asc" | "desc">("asc");
  const keyWord = ref("");
  const pageSize = ref(3);
  const currentPage = ref(1);

  const sortedAndFilteredMerchandises = computed((): Merchandise[] => {
    return merchandises.value
      .filter((p: Merchandise) => p.name.includes(keyWord.value))
      .sort((a: Merchandise, b: Merchandise) => {
        return sortOrder.value === "asc"
          ? a.quantity - b.quantity
          : b.quantity - a.quantity;
      });
  });

  const pagnitedMerchandises = computed(() => {
    const start = (currentPage.value - 1) * pageSize.value;
    const end = start + pageSize.value;
    return sortedAndFilteredMerchandises.value.slice(start, end);
  });

  return { sortOrder, keyWord, pageSize, currentPage, pagnitedMerchandises };
};
