"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowInstanceCreateResponse = void 0;
/**
 * Response returned upon successful workflow instance creation.
 */
class WorkflowInstanceCreateResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WorkflowInstanceCreateResponse.attributeTypeMap;
    }
}
exports.WorkflowInstanceCreateResponse = WorkflowInstanceCreateResponse;
/**
 * @ignore
 */
WorkflowInstanceCreateResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "WorkflowInstanceCreateResponseData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=WorkflowInstanceCreateResponse.js.map