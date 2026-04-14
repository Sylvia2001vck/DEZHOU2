"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FlakyTestPipelineStats = void 0;
/**
 * CI pipeline related statistics for the flaky test. This information is only available if test runs are associated with CI pipeline events from CI Visibility.
 */
class FlakyTestPipelineStats {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FlakyTestPipelineStats.attributeTypeMap;
    }
}
exports.FlakyTestPipelineStats = FlakyTestPipelineStats;
/**
 * @ignore
 */
FlakyTestPipelineStats.attributeTypeMap = {
    failedPipelines: {
        baseName: "failed_pipelines",
        type: "number",
        format: "int64",
    },
    totalLostTimeMs: {
        baseName: "total_lost_time_ms",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FlakyTestPipelineStats.js.map