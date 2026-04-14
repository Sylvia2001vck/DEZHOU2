"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IssueUpdateAssigneeRequestData = void 0;
/**
 * Update issue assignee request.
 */
class IssueUpdateAssigneeRequestData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IssueUpdateAssigneeRequestData.attributeTypeMap;
    }
}
exports.IssueUpdateAssigneeRequestData = IssueUpdateAssigneeRequestData;
/**
 * @ignore
 */
IssueUpdateAssigneeRequestData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "IssueUpdateAssigneeRequestDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IssueUpdateAssigneeRequestData.js.map