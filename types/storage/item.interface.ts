export interface Item {
  id: string;
  name: string;
  amount: number;

  sku: string; // stock keeping units
  description?: string;
  imageUrl?: string;
}
