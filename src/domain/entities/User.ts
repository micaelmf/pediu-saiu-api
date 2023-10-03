// src/domain/entities/User.ts
export class User {
  constructor(
    public id: number,
    public uuid: string,
    public email: string,
    public nickname: string,
    public role: string,
    public firstName: string | null,
    public lastName: string | null,
    public createdAt: Date,
    public updatedAt: Date,
    public deletedAt: Date | null,
    public enterpriseId: number
  ) {}
}
