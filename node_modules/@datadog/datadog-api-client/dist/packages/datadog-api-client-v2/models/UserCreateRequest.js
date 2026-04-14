"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCreateRequest = void 0;
/**
 * Create a user.
 */
class UserCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UserCreateRequest.attributeTypeMap;
    }
}
exports.UserCreateRequest = UserCreateRequest;
/**
 * @ignore
 */
UserCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "UserCreateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UserCreateRequest.js.map