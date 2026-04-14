"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToOrganization = void 0;
/**
 * Relationship to an organization.
 */
class RelationshipToOrganization {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToOrganization.attributeTypeMap;
    }
}
exports.RelationshipToOrganization = RelationshipToOrganization;
/**
 * @ignore
 */
RelationshipToOrganization.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RelationshipToOrganizationData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToOrganization.js.map