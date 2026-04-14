"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersRelationship = void 0;
/**
 * Relationship to users.
 */
class UsersRelationship {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsersRelationship.attributeTypeMap;
    }
}
exports.UsersRelationship = UsersRelationship;
/**
 * @ignore
 */
UsersRelationship.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<UserRelationshipData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsersRelationship.js.map