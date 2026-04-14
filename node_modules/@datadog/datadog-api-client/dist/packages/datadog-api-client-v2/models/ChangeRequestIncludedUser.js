"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeRequestIncludedUser = void 0;
/**
 * An included user resource.
 */
class ChangeRequestIncludedUser {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ChangeRequestIncludedUser.attributeTypeMap;
    }
}
exports.ChangeRequestIncludedUser = ChangeRequestIncludedUser;
/**
 * @ignore
 */
ChangeRequestIncludedUser.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "ChangeRequestIncludedUserAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ChangeRequestIncludedUser.js.map