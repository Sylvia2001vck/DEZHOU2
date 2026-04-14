"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToOrganizationData = void 0;
/**
 * Relationship to organization object.
 */
class RelationshipToOrganizationData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToOrganizationData.attributeTypeMap;
    }
}
exports.RelationshipToOrganizationData = RelationshipToOrganizationData;
/**
 * @ignore
 */
RelationshipToOrganizationData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "OrganizationsType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToOrganizationData.js.map