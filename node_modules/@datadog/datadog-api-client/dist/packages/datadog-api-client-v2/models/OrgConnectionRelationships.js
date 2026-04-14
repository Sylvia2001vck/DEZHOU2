"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgConnectionRelationships = void 0;
/**
 * Related organizations and user.
 */
class OrgConnectionRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OrgConnectionRelationships.attributeTypeMap;
    }
}
exports.OrgConnectionRelationships = OrgConnectionRelationships;
/**
 * @ignore
 */
OrgConnectionRelationships.attributeTypeMap = {
    createdBy: {
        baseName: "created_by",
        type: "OrgConnectionUserRelationship",
    },
    sinkOrg: {
        baseName: "sink_org",
        type: "OrgConnectionOrgRelationship",
    },
    sourceOrg: {
        baseName: "source_org",
        type: "OrgConnectionOrgRelationship",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OrgConnectionRelationships.js.map