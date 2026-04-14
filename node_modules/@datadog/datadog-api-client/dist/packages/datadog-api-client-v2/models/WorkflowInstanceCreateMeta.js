"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowInstanceCreateMeta = void 0;
/**
 * Additional information for creating a workflow instance.
 */
class WorkflowInstanceCreateMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WorkflowInstanceCreateMeta.attributeTypeMap;
    }
}
exports.WorkflowInstanceCreateMeta = WorkflowInstanceCreateMeta;
/**
 * @ignore
 */
WorkflowInstanceCreateMeta.attributeTypeMap = {
    payload: {
        baseName: "payload",
        type: "{ [key: string]: any; }",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=WorkflowInstanceCreateMeta.js.map