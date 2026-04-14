"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringSignalsListResponseMetaPage = void 0;
/**
 * Paging attributes.
 */
class SecurityMonitoringSignalsListResponseMetaPage {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringSignalsListResponseMetaPage.attributeTypeMap;
    }
}
exports.SecurityMonitoringSignalsListResponseMetaPage = SecurityMonitoringSignalsListResponseMetaPage;
/**
 * @ignore
 */
SecurityMonitoringSignalsListResponseMetaPage.attributeTypeMap = {
    after: {
        baseName: "after",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringSignalsListResponseMetaPage.js.map