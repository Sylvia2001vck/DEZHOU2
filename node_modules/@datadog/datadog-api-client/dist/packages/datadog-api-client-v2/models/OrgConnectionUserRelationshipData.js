"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgConnectionUserRelationshipData = void 0;
/**
 * The data for a user relationship.
 */
class OrgConnectionUserRelationshipData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OrgConnectionUserRelationshipData.attributeTypeMap;
    }
}
exports.OrgConnectionUserRelationshipData = OrgConnectionUserRelationshipData;
/**
 * @ignore
 */
OrgConnectionUserRelationshipData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "OrgConnectionUserRelationshipDataType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OrgConnectionUserRelationshipData.js.map