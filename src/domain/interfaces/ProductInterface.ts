export interface ProductInterface {
  id?: number;
  uuid: string;
  name: string;
  description?: string | null;
  type: string;
  price: number;
  free: boolean;
  status: string | undefined;
  additionalsMax: number;
  accompanimentsMax: number;
  categoryId: number;
  enterpriseId: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
}
