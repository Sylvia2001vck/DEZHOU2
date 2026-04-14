"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgConnectionOrgRelationshipData = void 0;
/**
 * The definition of `OrgConnectionOrgRelationshipData` object.
 */
class OrgConnectionOrgRelationshipData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OrgConnectionOrgRelationshipData.attributeTypeMap;
    }
}
exports.OrgConnectionOrgRelationshipData = OrgConnectionOrgRelationshipData;
/**
 * @ignore
 */
OrgConnectionOrgRelationshipData.attributeTypeMap = {
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
        type: "OrgConnectionOrgRelationshipDataType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OrgConnectionOrgRelationshipData.js.map