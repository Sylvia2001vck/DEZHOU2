"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringSignalListRequestFilter = void 0;
/**
 * Search filters for listing security signals.
 */
class SecurityMonitoringSignalListRequestFilter {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringSignalListRequestFilter.attributeTypeMap;
    }
}
exports.SecurityMonitoringSignalListRequestFilter = SecurityMonitoringSignalListRequestFilter;
/**
 * @ignore
 */
SecurityMonitoringSignalListRequestFilter.attributeTypeMap = {
    from: {
        baseName: "from",
        type: "Date",
        format: "date-time",
    },
    query: {
        baseName: "query",
        type: "string",
    },
    to: {
        baseName: "to",
        type: "Date",
        format: "date-time",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringSignalListRequestFilter.js.map