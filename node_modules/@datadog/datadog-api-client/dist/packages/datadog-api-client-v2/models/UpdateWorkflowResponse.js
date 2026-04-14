"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWorkflowResponse = void 0;
/**
 * The response object after updating a workflow.
 */
class UpdateWorkflowResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateWorkflowResponse.attributeTypeMap;
    }
}
exports.UpdateWorkflowResponse = UpdateWorkflowResponse;
/**
 * @ignore
 */
UpdateWorkflowResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "WorkflowDataUpdate",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateWorkflowResponse.js.map