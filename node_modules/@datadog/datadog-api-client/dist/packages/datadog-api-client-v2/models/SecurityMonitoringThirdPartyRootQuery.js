"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringThirdPartyRootQuery = void 0;
/**
 * A query to be combined with the third party case query.
 */
class SecurityMonitoringThirdPartyRootQuery {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringThirdPartyRootQuery.attributeTypeMap;
    }
}
exports.SecurityMonitoringThirdPartyRootQuery = SecurityMonitoringThirdPartyRootQuery;
/**
 * @ignore
 */
SecurityMonitoringThirdPartyRootQuery.attributeTypeMap = {
    groupByFields: {
        baseName: "groupByFields",
        type: "Array<string>",
    },
    query: {
        baseName: "query",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringThirdPartyRootQuery.js.map