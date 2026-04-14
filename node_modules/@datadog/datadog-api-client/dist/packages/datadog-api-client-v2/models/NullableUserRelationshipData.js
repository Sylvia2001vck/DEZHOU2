"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableUserRelationshipData = void 0;
/**
 * Relationship to user object.
 */
class NullableUserRelationshipData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NullableUserRelationshipData.attributeTypeMap;
    }
}
exports.NullableUserRelationshipData = NullableUserRelationshipData;
/**
 * @ignore
 */
NullableUserRelationshipData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "UserResourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=NullableUserRelationshipData.js.map