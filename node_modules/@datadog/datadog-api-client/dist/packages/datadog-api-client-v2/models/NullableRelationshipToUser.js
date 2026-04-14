"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullableRelationshipToUser = void 0;
/**
 * Relationship to user.
 */
class NullableRelationshipToUser {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NullableRelationshipToUser.attributeTypeMap;
    }
}
exports.NullableRelationshipToUser = NullableRelationshipToUser;
/**
 * @ignore
 */
NullableRelationshipToUser.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "NullableRelationshipToUserData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=NullableRelationshipToUser.js.map