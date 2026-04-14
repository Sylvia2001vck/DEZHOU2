"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToOrganizations = void 0;
/**
 * Relationship to organizations.
 */
class RelationshipToOrganizations {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToOrganizations.attributeTypeMap;
    }
}
exports.RelationshipToOrganizations = RelationshipToOrganizations;
/**
 * @ignore
 */
RelationshipToOrganizations.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<RelationshipToOrganizationData>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToOrganizations.js.map