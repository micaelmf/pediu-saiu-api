// src/domain/entities/Category.ts
export class Category {
  constructor(
    public id: number,
    public uuid: string,
    public name: string,
    public description: string | null,
    public status: string | undefined,
    public enterpriseId: number,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt: Date | null
  ) {}
}
