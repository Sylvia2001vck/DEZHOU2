"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowDataRelationships = void 0;
/**
 * The definition of `WorkflowDataRelationships` object.
 */
class WorkflowDataRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WorkflowDataRelationships.attributeTypeMap;
    }
}
exports.WorkflowDataRelationships = WorkflowDataRelationships;
/**
 * @ignore
 */
WorkflowDataRelationships.attributeTypeMap = {
    creator: {
        baseName: "creator",
        type: "WorkflowUserRelationship",
    },
    owner: {
        baseName: "owner",
        type: "WorkflowUserRelationship",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=WorkflowDataRelationships.js.map