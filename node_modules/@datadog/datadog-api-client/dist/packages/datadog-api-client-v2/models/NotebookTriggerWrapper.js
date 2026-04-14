"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotebookTriggerWrapper = void 0;
/**
 * Schema for a Notebook-based trigger.
 */
class NotebookTriggerWrapper {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotebookTriggerWrapper.attributeTypeMap;
    }
}
exports.NotebookTriggerWrapper = NotebookTriggerWrapper;
/**
 * @ignore
 */
NotebookTriggerWrapper.attributeTypeMap = {
    notebookTrigger: {
        baseName: "notebookTrigger",
        type: "any",
        required: true,
    },
    startStepNames: {
        baseName: "startStepNames",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=NotebookTriggerWrapper.js.map