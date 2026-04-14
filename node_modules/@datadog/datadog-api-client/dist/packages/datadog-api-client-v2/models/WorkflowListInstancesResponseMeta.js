"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowListInstancesResponseMeta = void 0;
/**
 * Metadata about the instances list
 */
class WorkflowListInstancesResponseMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WorkflowListInstancesResponseMeta.attributeTypeMap;
    }
}
exports.WorkflowListInstancesResponseMeta = WorkflowListInstancesResponseMeta;
/**
 * @ignore
 */
WorkflowListInstancesResponseMeta.attributeTypeMap = {
    page: {
        baseName: "page",
        type: "WorkflowListInstancesResponseMetaPage",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=WorkflowListInstancesResponseMeta.js.map