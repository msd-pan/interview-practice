import type { OperationResult } from "~/types/common/operationResult.type";
import type { Box } from "~/types/storage/box.interface";

export interface Shelf {
  id: string;
  label: string;
  boxes: Box[];

  removeBoxesById(id: number, removeBoxesAmount: number): OperationResult;

  addBoxesById(id: number, addBoxesAmount: number): OperationResult;
}
