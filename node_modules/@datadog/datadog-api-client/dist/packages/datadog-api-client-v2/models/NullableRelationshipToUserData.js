"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableRelationshipToUserData = void 0;
/**
 * Relationship to user object.
 */
class NullableRelationshipToUserData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NullableRelationshipToUserData.attributeTypeMap;
    }
}
exports.NullableRelationshipToUserData = NullableRelationshipToUserData;
/**
 * @ignore
 */
NullableRelationshipToUserData.attributeTypeMap = {
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
//# sourceMappingURL=NullableRelationshipToUserData.js.map