"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueUser = void 0;
/**
 * The user to whom the issue is assigned.
 */
class IssueUser {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IssueUser.attributeTypeMap;
    }
}
exports.IssueUser = IssueUser;
/**
 * @ignore
 */
IssueUser.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "IssueUserAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "IssueUserType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IssueUser.js.map