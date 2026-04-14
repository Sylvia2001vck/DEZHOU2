"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateData = void 0;
/**
 * Object to update a user.
 */
class UserUpdateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UserUpdateData.attributeTypeMap;
    }
}
exports.UserUpdateData = UserUpdateData;
/**
 * @ignore
 */
UserUpdateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "UserUpdateAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
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
//# sourceMappingURL=UserUpdateData.js.map