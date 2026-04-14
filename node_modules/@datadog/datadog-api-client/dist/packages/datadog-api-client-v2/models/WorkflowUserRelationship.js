"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowUserRelationship = void 0;
/**
 * The definition of `WorkflowUserRelationship` object.
 */
class WorkflowUserRelationship {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WorkflowUserRelationship.attributeTypeMap;
    }
}
exports.WorkflowUserRelationship = WorkflowUserRelationship;
/**
 * @ignore
 */
WorkflowUserRelationship.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "WorkflowUserRelationshipData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=WorkflowUserRelationship.js.map