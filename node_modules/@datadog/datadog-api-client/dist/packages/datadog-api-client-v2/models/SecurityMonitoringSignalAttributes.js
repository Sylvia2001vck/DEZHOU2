"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringSignalAttributes = void 0;
/**
 * The object containing all signal attributes and their
 * associated values.
 */
class SecurityMonitoringSignalAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringSignalAttributes.attributeTypeMap;
    }
}
exports.SecurityMonitoringSignalAttributes = SecurityMonitoringSignalAttributes;
/**
 * @ignore
 */
SecurityMonitoringSignalAttributes.attributeTypeMap = {
    custom: {
        baseName: "custom",
        type: "{ [key: string]: any; }",
    },
    message: {
        baseName: "message",
        type: "string",
    },
    tags: {
        baseName: "tags",
        type: "Array<string>",
    },
    timestamp: {
        baseName: "timestamp",
        type: "Date",
        format: "date-time",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringSignalAttributes.js.map