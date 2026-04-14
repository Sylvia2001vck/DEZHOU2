"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlakyTestStats = void 0;
/**
 * Test statistics for the flaky test.
 */
class FlakyTestStats {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FlakyTestStats.attributeTypeMap;
    }
}
exports.FlakyTestStats = FlakyTestStats;
/**
 * @ignore
 */
FlakyTestStats.attributeTypeMap = {
    failureRatePct: {
        baseName: "failure_rate_pct",
        type: "number",
        format: "double",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FlakyTestStats.js.map