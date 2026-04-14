"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringReferenceTable = void 0;
/**
 * Reference tables used in the queries.
 */
class SecurityMonitoringReferenceTable {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringReferenceTable.attributeTypeMap;
    }
}
exports.SecurityMonitoringReferenceTable = SecurityMonitoringReferenceTable;
/**
 * @ignore
 */
SecurityMonitoringReferenceTable.attributeTypeMap = {
    checkPresence: {
        baseName: "checkPresence",
        type: "boolean",
    },
    columnName: {
        baseName: "columnName",
        type: "string",
    },
    logFieldPath: {
        baseName: "logFieldPath",
        type: "string",
    },
    ruleQueryName: {
        baseName: "ruleQueryName",
        type: "string",
    },
    tableName: {
        baseName: "tableName",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringReferenceTable.js.map