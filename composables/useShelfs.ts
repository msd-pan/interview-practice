import type { OperationResult } from "~/types/common/operationResult.type";
import type { Shelf } from "~/types/storage/shelf.interface";

export const useShelf = async (shelf: Ref<Shelf>) => {
  const addBox = (id: string): OperationResult => {
    const exists = shelf.value.boxes.find((b) => b.id === id);
    if (exists) {
      return { success: false, message: "box already exists" };
    }

    shelf.value.boxes.push();
    return {
      success: true,
      message: "box added successfully",
    };
  };

  const removeBoxById = (id: string): OperationResult => {
    const index = shelf.value.boxes.findIndex((b) => {
      b.id === id;
    });
    if (index !== -1) {
      shelf.value.boxes.splice(index, 1);
      return { success: true, message: "box removed success" };
    }

    return {
      success: false,
      message: `box with ID:${id} does not exist`,
    };
  };

  return { addBox, removeBoxById };
};
