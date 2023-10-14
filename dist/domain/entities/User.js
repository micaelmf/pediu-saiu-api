"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
// src/domain/entities/User.ts
class User {
    constructor(id, uuid, email, nickname, role, firstName, lastName, createdAt, updatedAt, deletedAt, enterpriseId) {
        this.id = id;
        this.uuid = uuid;
        this.email = email;
        this.nickname = nickname;
        this.role = role;
        this.firstName = firstName;
        this.lastName = lastName;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
        this.enterpriseId = enterpriseId;
    }
}
exports.User = User;
