"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateWorkflowRequest = void 0;
/**
 * A request object for creating a new workflow.
 */
class CreateWorkflowRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CreateWorkflowRequest.attributeTypeMap;
    }
}
exports.CreateWorkflowRequest = CreateWorkflowRequest;
/**
 * @ignore
 */
CreateWorkflowRequest.attributeTypeMap = {
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
//# sourceMappingURL=CreateWorkflowRequest.js.map