// src/domain/entities/Enterprise.ts
export class Enterprise {
  constructor(
    public id: number,
    public uuid: string,
    public name: string,
    public responsiblePerson: string | null,
    public phoneNumber: string | null,
    public email: string | null,
    public description: string | null,
    public status: string,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt: Date | null
  ) {}
}
