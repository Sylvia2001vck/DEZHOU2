"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringSignalListRequestPage = void 0;
/**
 * The paging attributes for listing security signals.
 */
class SecurityMonitoringSignalListRequestPage {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringSignalListRequestPage.attributeTypeMap;
    }
}
exports.SecurityMonitoringSignalListRequestPage = SecurityMonitoringSignalListRequestPage;
/**
 * @ignore
 */
SecurityMonitoringSignalListRequestPage.attributeTypeMap = {
    cursor: {
        baseName: "cursor",
        type: "string",
    },
    limit: {
        baseName: "limit",
        type: "number",
        format: "int32",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringSignalListRequestPage.js.map