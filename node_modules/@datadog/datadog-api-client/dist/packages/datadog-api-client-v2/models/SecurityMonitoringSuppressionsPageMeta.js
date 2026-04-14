"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringSuppressionsPageMeta = void 0;
/**
 * Pagination metadata.
 */
class SecurityMonitoringSuppressionsPageMeta {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringSuppressionsPageMeta.attributeTypeMap;
    }
}
exports.SecurityMonitoringSuppressionsPageMeta = SecurityMonitoringSuppressionsPageMeta;
/**
 * @ignore
 */
SecurityMonitoringSuppressionsPageMeta.attributeTypeMap = {
    pageNumber: {
        baseName: "pageNumber",
        type: "number",
        format: "int64",
    },
    pageSize: {
        baseName: "pageSize",
        type: "number",
        format: "int64",
    },
    totalCount: {
        baseName: "totalCount",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringSuppressionsPageMeta.js.map