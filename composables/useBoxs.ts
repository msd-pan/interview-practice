import type { OperationResult } from "~/types/common/operationResult.type";
import type { Item } from "~/types/storage/item.interface";
import type { Box } from "~/types/storage/box.interface";

export const useBox = async (box: Ref<Box>) => {
  const addItemById = async (
    id: string,
    amount: number
  ): Promise<OperationResult> => {
    // todo
    // check if there's item with this id in database
    const index = box.value.items.findIndex((i) => {
      i.id === id;
    });
    if (index !== -1) {
      box.value.items[index].amount += amount;
    } else {
      const testItem: Item = {
        id: "1",
        name: "test",
        amount,
        sku: "test",
      };
      box.value.items.push(testItem);
    }

    return { success: true, message: "items added succeed" };
  };

  const removeItemById = async (
    id: string,
    amount: number
  ): Promise<OperationResult> => {
    // todo
    // check if there's item with this id in database
    const index = box.value.items.findIndex((i) => {
      i.id === id;
    });
    if (index !== -1) {
      box.value.items[index].amount -= amount;
      return { success: true, message: "item removed succeed" };
    } else {
      return { success: false, message: "item does not exist" };
    }
  };

  return {
    addItemById,
    removeItemById,
  };
};
