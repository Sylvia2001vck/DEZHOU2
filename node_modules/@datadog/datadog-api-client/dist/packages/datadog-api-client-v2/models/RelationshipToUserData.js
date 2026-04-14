"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToUserData = void 0;
/**
 * Relationship to user object.
 */
class RelationshipToUserData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToUserData.attributeTypeMap;
    }
}
exports.RelationshipToUserData = RelationshipToUserData;
/**
 * @ignore
 */
RelationshipToUserData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "UsersType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToUserData.js.map