"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueCaseRelationship = void 0;
/**
 * Relationship between the issue and case.
 */
class IssueCaseRelationship {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IssueCaseRelationship.attributeTypeMap;
    }
}
exports.IssueCaseRelationship = IssueCaseRelationship;
/**
 * @ignore
 */
IssueCaseRelationship.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IssueCaseReference",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IssueCaseRelationship.js.map