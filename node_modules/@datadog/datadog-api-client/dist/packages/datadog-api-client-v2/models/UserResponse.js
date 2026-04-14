"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResponse = void 0;
/**
 * Response containing information about a single user.
 */
class UserResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UserResponse.attributeTypeMap;
    }
}
exports.UserResponse = UserResponse;
/**
 * @ignore
 */
UserResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "User",
    },
    included: {
        baseName: "included",
        type: "Array<UserResponseIncludedItem>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UserResponse.js.map