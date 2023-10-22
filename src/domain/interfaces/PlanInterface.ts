export interface PlanInterface {
  id?: number;
  uuid: string;
  name: string;
  description?: string | null;
  price: number;
  isActive?: boolean;
  contractPeriod: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date | null;
}