"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserUpdateRequest = void 0;
/**
 * Update a user.
 */
class UserUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UserUpdateRequest.attributeTypeMap;
    }
}
exports.UserUpdateRequest = UserUpdateRequest;
/**
 * @ignore
 */
UserUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "UserUpdateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UserUpdateRequest.js.map