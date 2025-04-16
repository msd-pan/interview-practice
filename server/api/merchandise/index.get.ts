import type { Merchandise } from "~/types/merchandise/merchandise.interface";

export default defineEventHandler(async (event) => {
  try {
    // todo
    // fetching merchandises

    const data: Merchandise[] = [
      { id: "1", name: "test1", quantity: 1, location: "l1" },
      { id: "12", name: "test12", quantity: 12, location: "l2" },
      { id: "2", name: "test2", quantity: 2, location: "l2" },
      { id: "3", name: "test3", quantity: 3, location: "l3" },
      { id: "0", name: "test0", quantity: 0, location: "l3" },
      { id: "4", name: "test4", quantity: 4, location: "l4" },
      { id: "43", name: "test43", quantity: 43, location: "l43" },
      { id: "5", name: "test5", quantity: 5, location: "l5" },
    ];

    return { ok: true, data };
  } catch (err) {
    console.error(err);
    return { ok: false, error: "error fetching merchandises" };
  }
});
