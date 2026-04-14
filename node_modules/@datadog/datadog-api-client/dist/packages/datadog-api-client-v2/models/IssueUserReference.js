"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueUserReference = void 0;
/**
 * The user the issue is assigned to.
 */
class IssueUserReference {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IssueUserReference.attributeTypeMap;
    }
}
exports.IssueUserReference = IssueUserReference;
/**
 * @ignore
 */
IssueUserReference.attributeTypeMap = {
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
//# sourceMappingURL=IssueUserReference.js.map