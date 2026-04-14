"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
/**
 * User object returned by the API.
 */
class User {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return User.attributeTypeMap;
    }
}
exports.User = User;
/**
 * @ignore
 */
User.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "UserAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    relationships: {
        baseName: "relationships",
        type: "UserResponseRelationships",
    },
    type: {
        baseName: "type",
        type: "UsersType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=User.js.map