"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowDataUpdateAttributes = void 0;
/**
 * The definition of `WorkflowDataUpdateAttributes` object.
 */
class WorkflowDataUpdateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WorkflowDataUpdateAttributes.attributeTypeMap;
    }
}
exports.WorkflowDataUpdateAttributes = WorkflowDataUpdateAttributes;
/**
 * @ignore
 */
WorkflowDataUpdateAttributes.attributeTypeMap = {
    createdAt: {
        baseName: "createdAt",
        type: "Date",
        format: "date-time",
    },
    description: {
        baseName: "description",
        type: "string",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    published: {
        baseName: "published",
        type: "boolean",
    },
    spec: {
        baseName: "spec",
        type: "Spec",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    updatedAt: {
        baseName: "updatedAt",
        type: "Date",
        format: "date-time",
    },
    webhookSecret: {
        baseName: "webhookSecret",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=WorkflowDataUpdateAttributes.js.map