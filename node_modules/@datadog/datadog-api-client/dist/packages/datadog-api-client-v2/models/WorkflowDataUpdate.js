"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowDataUpdate = void 0;
/**
 * Data related to the workflow being updated.
 */
class WorkflowDataUpdate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WorkflowDataUpdate.attributeTypeMap;
    }
}
exports.WorkflowDataUpdate = WorkflowDataUpdate;
/**
 * @ignore
 */
WorkflowDataUpdate.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "WorkflowDataUpdateAttributes",
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
//# sourceMappingURL=WorkflowDataUpdate.js.map