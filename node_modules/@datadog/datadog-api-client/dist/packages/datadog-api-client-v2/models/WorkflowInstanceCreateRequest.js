"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowInstanceCreateRequest = void 0;
/**
 * Request used to create a workflow instance.
 */
class WorkflowInstanceCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WorkflowInstanceCreateRequest.attributeTypeMap;
    }
}
exports.WorkflowInstanceCreateRequest = WorkflowInstanceCreateRequest;
/**
 * @ignore
 */
WorkflowInstanceCreateRequest.attributeTypeMap = {
    meta: {
        baseName: "meta",
        type: "WorkflowInstanceCreateMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=WorkflowInstanceCreateRequest.js.map