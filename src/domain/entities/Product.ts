// src/domain/entities/Product.ts
export class Product {
  constructor(
    public id: number,
    public uuid: string,
    public name: string,
    public description: string | null,
    public type: string,
    public price: number,
    public free: boolean,
    public status: string | undefined,
    public additionalsMax: number,
    public accompanimentsMax: number,
    public categoryId: number,
    public enterpriseId: number,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt: Date | null
  ) {}
}
