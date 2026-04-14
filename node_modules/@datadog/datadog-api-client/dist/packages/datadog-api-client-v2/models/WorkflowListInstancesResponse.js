"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowListInstancesResponse = void 0;
/**
 * Response returned when listing workflow instances.
 */
class WorkflowListInstancesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WorkflowListInstancesResponse.attributeTypeMap;
    }
}
exports.WorkflowListInstancesResponse = WorkflowListInstancesResponse;
/**
 * @ignore
 */
WorkflowListInstancesResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<WorkflowInstanceListItem>",
    },
    meta: {
        baseName: "meta",
        type: "WorkflowListInstancesResponseMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=WorkflowListInstancesResponse.js.map