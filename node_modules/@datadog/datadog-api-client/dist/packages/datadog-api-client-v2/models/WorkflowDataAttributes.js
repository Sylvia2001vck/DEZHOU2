"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowDataAttributes = void 0;
/**
 * The definition of `WorkflowDataAttributes` object.
 */
class WorkflowDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WorkflowDataAttributes.attributeTypeMap;
    }
}
exports.WorkflowDataAttributes = WorkflowDataAttributes;
/**
 * @ignore
 */
WorkflowDataAttributes.attributeTypeMap = {
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
        required: true,
    },
    published: {
        baseName: "published",
        type: "boolean",
    },
    spec: {
        baseName: "spec",
        type: "Spec",
        required: true,
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
//# sourceMappingURL=WorkflowDataAttributes.js.map