"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RawErrorBudgetRemaining = void 0;
/**
 * The raw error budget remaining for the SLO.
 */
class RawErrorBudgetRemaining {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RawErrorBudgetRemaining.attributeTypeMap;
    }
}
exports.RawErrorBudgetRemaining = RawErrorBudgetRemaining;
/**
 * @ignore
 */
RawErrorBudgetRemaining.attributeTypeMap = {
    unit: {
        baseName: "unit",
        type: "string",
        required: true,
    },
    value: {
        baseName: "value",
        type: "number",
        required: true,
        format: "double",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RawErrorBudgetRemaining.js.map