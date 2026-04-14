"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgConnectionCreateRelationships = void 0;
/**
 * Relationships for org connection creation.
 */
class OrgConnectionCreateRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OrgConnectionCreateRelationships.attributeTypeMap;
    }
}
exports.OrgConnectionCreateRelationships = OrgConnectionCreateRelationships;
/**
 * @ignore
 */
OrgConnectionCreateRelationships.attributeTypeMap = {
    sinkOrg: {
        baseName: "sink_org",
        type: "OrgConnectionOrgRelationship",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OrgConnectionCreateRelationships.js.map