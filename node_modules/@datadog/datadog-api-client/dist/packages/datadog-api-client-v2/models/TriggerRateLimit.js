"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TriggerRateLimit = void 0;
/**
 * Defines a rate limit for a trigger.
 */
class TriggerRateLimit {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return TriggerRateLimit.attributeTypeMap;
    }
}
exports.TriggerRateLimit = TriggerRateLimit;
/**
 * @ignore
 */
TriggerRateLimit.attributeTypeMap = {
    count: {
        baseName: "count",
        type: "number",
        format: "int64",
    },
    interval: {
        baseName: "interval",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=TriggerRateLimit.js.map