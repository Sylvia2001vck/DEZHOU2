"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueReference = void 0;
/**
 * The issue the search result corresponds to.
 */
class IssueReference {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IssueReference.attributeTypeMap;
    }
}
exports.IssueReference = IssueReference;
/**
 * @ignore
 */
IssueReference.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "IssueType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IssueReference.js.map