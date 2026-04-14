"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeRequestUserRelationship = void 0;
/**
 * Relationship to a user.
 */
class ChangeRequestUserRelationship {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ChangeRequestUserRelationship.attributeTypeMap;
    }
}
exports.ChangeRequestUserRelationship = ChangeRequestUserRelationship;
/**
 * @ignore
 */
ChangeRequestUserRelationship.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ChangeRequestUserRelationshipData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ChangeRequestUserRelationship.js.map