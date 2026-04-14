"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomCostsFileUsageChargePeriod = void 0;
/**
 * Usage charge period of a Custom Costs file.
 */
class CustomCostsFileUsageChargePeriod {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomCostsFileUsageChargePeriod.attributeTypeMap;
    }
}
exports.CustomCostsFileUsageChargePeriod = CustomCostsFileUsageChargePeriod;
/**
 * @ignore
 */
CustomCostsFileUsageChargePeriod.attributeTypeMap = {
    end: {
        baseName: "end",
        type: "number",
        format: "double",
    },
    start: {
        baseName: "start",
        type: "number",
        format: "double",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomCostsFileUsageChargePeriod.js.map