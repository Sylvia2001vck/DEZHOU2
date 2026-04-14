"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowData = void 0;
/**
 * Data related to the workflow.
 */
class WorkflowData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WorkflowData.attributeTypeMap;
    }
}
exports.WorkflowData = WorkflowData;
/**
 * @ignore
 */
WorkflowData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "WorkflowDataAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
    },
    relationships: {
        baseName: "relationships",
        type: "WorkflowDataRelationships",
    },
    type: {
        baseName: "type",
        type: "WorkflowDataType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=WorkflowData.js.map