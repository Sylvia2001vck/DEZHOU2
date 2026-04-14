"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetWorkflowResponse = void 0;
/**
 * The response object after getting a workflow.
 */
class GetWorkflowResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GetWorkflowResponse.attributeTypeMap;
    }
}
exports.GetWorkflowResponse = GetWorkflowResponse;
/**
 * @ignore
 */
GetWorkflowResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "WorkflowData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GetWorkflowResponse.js.map