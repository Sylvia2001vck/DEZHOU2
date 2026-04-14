"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableUserRelationship = void 0;
/**
 * Relationship to user.
 */
class NullableUserRelationship {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NullableUserRelationship.attributeTypeMap;
    }
}
exports.NullableUserRelationship = NullableUserRelationship;
/**
 * @ignore
 */
NullableUserRelationship.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "NullableUserRelationshipData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=NullableUserRelationship.js.map