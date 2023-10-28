export interface CategoryInterface {
  id?: number;
  uuid: string;
  name: string;
  description?: string | null;
  enterpriseId: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
}