"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomCostListResponseMeta = void 0;
/**
 * Meta for the response from the List Custom Costs endpoints.
 */
class CustomCostListResponseMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return CustomCostListResponseMeta.attributeTypeMap;
    }
}
exports.CustomCostListResponseMeta = CustomCostListResponseMeta;
/**
 * @ignore
 */
CustomCostListResponseMeta.attributeTypeMap = {
    totalFilteredCount: {
        baseName: "total_filtered_count",
        type: "number",
        format: "int64",
    },
    version: {
        baseName: "version",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=CustomCostListResponseMeta.js.map