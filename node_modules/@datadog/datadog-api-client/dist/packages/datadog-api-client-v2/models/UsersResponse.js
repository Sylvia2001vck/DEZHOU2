"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersResponse = void 0;
/**
 * Response containing information about multiple users.
 */
class UsersResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UsersResponse.attributeTypeMap;
    }
}
exports.UsersResponse = UsersResponse;
/**
 * @ignore
 */
UsersResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<User>",
    },
    included: {
        baseName: "included",
        type: "Array<UserResponseIncludedItem>",
    },
    meta: {
        baseName: "meta",
        type: "ResponseMetaAttributes",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UsersResponse.js.map