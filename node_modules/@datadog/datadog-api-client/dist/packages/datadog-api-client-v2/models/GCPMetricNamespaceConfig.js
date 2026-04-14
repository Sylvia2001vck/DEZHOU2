"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCPMetricNamespaceConfig = void 0;
/**
 * Configuration for a GCP metric namespace.
 */
class GCPMetricNamespaceConfig {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GCPMetricNamespaceConfig.attributeTypeMap;
    }
}
exports.GCPMetricNamespaceConfig = GCPMetricNamespaceConfig;
/**
 * @ignore
 */
GCPMetricNamespaceConfig.attributeTypeMap = {
    disabled: {
        baseName: "disabled",
        type: "boolean",
    },
    filters: {
        baseName: "filters",
        type: "Array<string>",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GCPMetricNamespaceConfig.js.map