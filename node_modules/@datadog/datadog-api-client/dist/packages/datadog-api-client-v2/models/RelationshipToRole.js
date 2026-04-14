"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToRole = void 0;
/**
 * Relationship to role.
 */
class RelationshipToRole {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToRole.attributeTypeMap;
    }
}
exports.RelationshipToRole = RelationshipToRole;
/**
 * @ignore
 */
RelationshipToRole.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RelationshipToRoleData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToRole.js.map