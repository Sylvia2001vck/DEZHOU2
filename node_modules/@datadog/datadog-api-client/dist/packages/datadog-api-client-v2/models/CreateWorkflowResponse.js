"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWorkflowResponse = void 0;
/**
 * The response object after creating a new workflow.
 */
class CreateWorkflowResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateWorkflowResponse.attributeTypeMap;
    }
}
exports.CreateWorkflowResponse = CreateWorkflowResponse;
/**
 * @ignore
 */
CreateWorkflowResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "WorkflowData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CreateWorkflowResponse.js.map