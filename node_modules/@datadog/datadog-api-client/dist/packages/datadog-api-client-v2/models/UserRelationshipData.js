"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRelationshipData = void 0;
/**
 * Relationship to user object.
 */
class UserRelationshipData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UserRelationshipData.attributeTypeMap;
    }
}
exports.UserRelationshipData = UserRelationshipData;
/**
 * @ignore
 */
UserRelationshipData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "UserResourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UserRelationshipData.js.map