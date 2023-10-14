"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Enterprise = void 0;
// src/domain/entities/Enterprise.ts
class Enterprise {
    constructor(id, uuid, name, responsiblePerson, phoneNumber, email, description, status, createdAt, updatedAt, deletedAt) {
        this.id = id;
        this.uuid = uuid;
        this.name = name;
        this.responsiblePerson = responsiblePerson;
        this.phoneNumber = phoneNumber;
        this.email = email;
        this.description = description;
        this.status = status;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;
    }
}
exports.Enterprise = Enterprise;
