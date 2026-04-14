"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorkflowTriggerWrapper = void 0;
/**
 * Schema for a Workflow-based trigger.
 */
class WorkflowTriggerWrapper {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return WorkflowTriggerWrapper.attributeTypeMap;
    }
}
exports.WorkflowTriggerWrapper = WorkflowTriggerWrapper;
/**
 * @ignore
 */
WorkflowTriggerWrapper.attributeTypeMap = {
    startStepNames: {
        baseName: "startStepNames",
        type: "Array<string>",
    },
    workflowTrigger: {
        baseName: "workflowTrigger",
        type: "any",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=WorkflowTriggerWrapper.js.map