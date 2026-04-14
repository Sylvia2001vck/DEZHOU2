"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueUpdateAssigneeRequest = void 0;
/**
 * Update issue assignee request payload.
 */
class IssueUpdateAssigneeRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IssueUpdateAssigneeRequest.attributeTypeMap;
    }
}
exports.IssueUpdateAssigneeRequest = IssueUpdateAssigneeRequest;
/**
 * @ignore
 */
IssueUpdateAssigneeRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IssueUpdateAssigneeRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IssueUpdateAssigneeRequest.js.map