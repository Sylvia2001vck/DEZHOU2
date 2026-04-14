"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateData = void 0;
/**
 * Object to create a user.
 */
class UserCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UserCreateData.attributeTypeMap;
    }
}
exports.UserCreateData = UserCreateData;
/**
 * @ignore
 */
UserCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "UserCreateAttributes",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "UserRelationships",
    },
    type: {
        baseName: "type",
        type: "UsersType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UserCreateData.js.map