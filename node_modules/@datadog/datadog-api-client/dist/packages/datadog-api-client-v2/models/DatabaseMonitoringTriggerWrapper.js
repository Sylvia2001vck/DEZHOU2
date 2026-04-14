"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseMonitoringTriggerWrapper = void 0;
/**
 * Schema for a Database Monitoring-based trigger.
 */
class DatabaseMonitoringTriggerWrapper {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DatabaseMonitoringTriggerWrapper.attributeTypeMap;
    }
}
exports.DatabaseMonitoringTriggerWrapper = DatabaseMonitoringTriggerWrapper;
/**
 * @ignore
 */
DatabaseMonitoringTriggerWrapper.attributeTypeMap = {
    databaseMonitoringTrigger: {
        baseName: "databaseMonitoringTrigger",
        type: "any",
        required: true,
    },
    startStepNames: {
        baseName: "startStepNames",
        type: "Array<string>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DatabaseMonitoringTriggerWrapper.js.map