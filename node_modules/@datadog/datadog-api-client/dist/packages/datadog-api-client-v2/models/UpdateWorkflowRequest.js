"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWorkflowRequest = void 0;
/**
 * A request object for updating an existing workflow.
 */
class UpdateWorkflowRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateWorkflowRequest.attributeTypeMap;
    }
}
exports.UpdateWorkflowRequest = UpdateWorkflowRequest;
/**
 * @ignore
 */
UpdateWorkflowRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "WorkflowDataUpdate",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=UpdateWorkflowRequest.js.map