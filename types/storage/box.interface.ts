import type { OperationResult } from "~/types/common/operationResult.type";
import type { Item } from "~/types/storage/item.interface";

export interface Box {
  id: string;
  label: string;
  order: number;
  items: Item[];

  removeItemsById(id: number, removeItemAmount: number): OperationResult;

  addItemsById(id: number, addItemAmount: number): OperationResult;
}
