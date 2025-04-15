/**
 * API handler for fetching items from a specific box
 * -boxId: string
 *
 * Example:
 * Get /api/storage/items?boxId=123
 */

import type { Item } from "~/types/storage/item.interface";

export default defineEventHandler(async (event) => {
  try {
    const boxId = getQuery(event);
    const items: Item[] = [];
  } catch (err) {
    return {
      ok: false,
      error: "error getting all items",
    };
  }
});
