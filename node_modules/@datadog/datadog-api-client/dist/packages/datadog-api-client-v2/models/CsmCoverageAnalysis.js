"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsmCoverageAnalysis = void 0;
/**
 * CSM Coverage Analysis.
 */
class CsmCoverageAnalysis {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CsmCoverageAnalysis.attributeTypeMap;
    }
}
exports.CsmCoverageAnalysis = CsmCoverageAnalysis;
/**
 * @ignore
 */
CsmCoverageAnalysis.attributeTypeMap = {
    configuredResourcesCount: {
        baseName: "configured_resources_count",
        type: "number",
        format: "int64",
    },
    coverage: {
        baseName: "coverage",
        type: "number",
        format: "double",
    },
    partiallyConfiguredResourcesCount: {
        baseName: "partially_configured_resources_count",
        type: "number",
        format: "int64",
    },
    totalResourcesCount: {
        baseName: "total_resources_count",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CsmCoverageAnalysis.js.map