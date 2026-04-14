"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToUsers = void 0;
/**
 * Relationship to users.
 */
class RelationshipToUsers {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToUsers.attributeTypeMap;
    }
}
exports.RelationshipToUsers = RelationshipToUsers;
/**
 * @ignore
 */
RelationshipToUsers.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<RelationshipToUserData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToUsers.js.map