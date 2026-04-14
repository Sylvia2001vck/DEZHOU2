"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgConnectionOrgRelationship = void 0;
/**
 * Org relationship.
 */
class OrgConnectionOrgRelationship {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OrgConnectionOrgRelationship.attributeTypeMap;
    }
}
exports.OrgConnectionOrgRelationship = OrgConnectionOrgRelationship;
/**
 * @ignore
 */
OrgConnectionOrgRelationship.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "OrgConnectionOrgRelationshipData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OrgConnectionOrgRelationship.js.map