"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.GCPUsageCostConfigPatchRequestAttributes = void 0;
/**
 * Attributes for Google Cloud Usage Cost config patch request.
 */
class GCPUsageCostConfigPatchRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return GCPUsageCostConfigPatchRequestAttributes.attributeTypeMap;
    }
}
exports.GCPUsageCostConfigPatchRequestAttributes = GCPUsageCostConfigPatchRequestAttributes;
/**
 * @ignore
 */
GCPUsageCostConfigPatchRequestAttributes.attributeTypeMap = {
    isEnabled: {
        baseName: "is_enabled",
        type: "boolean",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=GCPUsageCostConfigPatchRequestAttributes.js.map