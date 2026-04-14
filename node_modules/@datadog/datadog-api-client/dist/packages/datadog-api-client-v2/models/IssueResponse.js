"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueResponse = void 0;
/**
 * Response containing error tracking issue data.
 */
class IssueResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IssueResponse.attributeTypeMap;
    }
}
exports.IssueResponse = IssueResponse;
/**
 * @ignore
 */
IssueResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Issue",
    },
    included: {
        baseName: "included",
        type: "Array<IssueIncluded>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IssueResponse.js.map