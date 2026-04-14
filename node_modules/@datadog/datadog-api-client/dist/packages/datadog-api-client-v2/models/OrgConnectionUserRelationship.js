"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrgConnectionUserRelationship = void 0;
/**
 * User relationship.
 */
class OrgConnectionUserRelationship {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OrgConnectionUserRelationship.attributeTypeMap;
    }
}
exports.OrgConnectionUserRelationship = OrgConnectionUserRelationship;
/**
 * @ignore
 */
OrgConnectionUserRelationship.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "OrgConnectionUserRelationshipData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OrgConnectionUserRelationship.js.map