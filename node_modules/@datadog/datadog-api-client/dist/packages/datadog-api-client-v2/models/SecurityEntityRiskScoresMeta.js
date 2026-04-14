"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityEntityRiskScoresMeta = void 0;
/**
 * Metadata for pagination
 */
class SecurityEntityRiskScoresMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityEntityRiskScoresMeta.attributeTypeMap;
    }
}
exports.SecurityEntityRiskScoresMeta = SecurityEntityRiskScoresMeta;
/**
 * @ignore
 */
SecurityEntityRiskScoresMeta.attributeTypeMap = {
    pageNumber: {
        baseName: "pageNumber",
        type: "number",
        required: true,
        format: "int64",
    },
    pageSize: {
        baseName: "pageSize",
        type: "number",
        required: true,
        format: "int64",
    },
    queryId: {
        baseName: "queryId",
        type: "string",
        required: true,
    },
    totalRowCount: {
        baseName: "totalRowCount",
        type: "number",
        required: true,
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityEntityRiskScoresMeta.js.map