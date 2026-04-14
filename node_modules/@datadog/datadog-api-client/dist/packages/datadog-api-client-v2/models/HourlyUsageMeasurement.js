"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HourlyUsageMeasurement = void 0;
/**
 * Usage amount for a given usage type.
 */
class HourlyUsageMeasurement {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return HourlyUsageMeasurement.attributeTypeMap;
    }
}
exports.HourlyUsageMeasurement = HourlyUsageMeasurement;
/**
 * @ignore
 */
HourlyUsageMeasurement.attributeTypeMap = {
    usageType: {
        baseName: "usage_type",
        type: "string",
    },
    value: {
        baseName: "value",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=HourlyUsageMeasurement.js.map