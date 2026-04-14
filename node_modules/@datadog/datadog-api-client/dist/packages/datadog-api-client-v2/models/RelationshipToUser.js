"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToUser = void 0;
/**
 * Relationship to user.
 */
class RelationshipToUser {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToUser.attributeTypeMap;
    }
}
exports.RelationshipToUser = RelationshipToUser;
/**
 * @ignore
 */
RelationshipToUser.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RelationshipToUserData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToUser.js.map