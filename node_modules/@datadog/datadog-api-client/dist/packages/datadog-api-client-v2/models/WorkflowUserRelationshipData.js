"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowUserRelationshipData = void 0;
/**
 * The definition of `WorkflowUserRelationshipData` object.
 */
class WorkflowUserRelationshipData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WorkflowUserRelationshipData.attributeTypeMap;
    }
}
exports.WorkflowUserRelationshipData = WorkflowUserRelationshipData;
/**
 * @ignore
 */
WorkflowUserRelationshipData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "WorkflowUserRelationshipType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=WorkflowUserRelationshipData.js.map