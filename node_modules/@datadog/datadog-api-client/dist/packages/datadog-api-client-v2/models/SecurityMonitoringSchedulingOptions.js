"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringSchedulingOptions = void 0;
/**
 * Options for scheduled rules. When this field is present, the rule runs based on the schedule. When absent, it runs real-time on ingested logs.
 */
class SecurityMonitoringSchedulingOptions {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringSchedulingOptions.attributeTypeMap;
    }
}
exports.SecurityMonitoringSchedulingOptions = SecurityMonitoringSchedulingOptions;
/**
 * @ignore
 */
SecurityMonitoringSchedulingOptions.attributeTypeMap = {
    rrule: {
        baseName: "rrule",
        type: "string",
    },
    start: {
        baseName: "start",
        type: "string",
    },
    timezone: {
        baseName: "timezone",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringSchedulingOptions.js.map