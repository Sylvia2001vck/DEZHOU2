"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleTrigger = void 0;
/**
 * Trigger a workflow from a Schedule. The workflow must be published.
 */
class ScheduleTrigger {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScheduleTrigger.attributeTypeMap;
    }
}
exports.ScheduleTrigger = ScheduleTrigger;
/**
 * @ignore
 */
ScheduleTrigger.attributeTypeMap = {
    rruleExpression: {
        baseName: "rruleExpression",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScheduleTrigger.js.map