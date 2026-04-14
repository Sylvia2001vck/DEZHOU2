"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RetryStrategyLinear = void 0;
/**
 * The definition of `RetryStrategyLinear` object.
 */
class RetryStrategyLinear {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RetryStrategyLinear.attributeTypeMap;
    }
}
exports.RetryStrategyLinear = RetryStrategyLinear;
/**
 * @ignore
 */
RetryStrategyLinear.attributeTypeMap = {
    interval: {
        baseName: "interval",
        type: "string",
        required: true,
    },
    maxRetries: {
        baseName: "maxRetries",
        type: "number",
        required: true,
        format: "double",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RetryStrategyLinear.js.map