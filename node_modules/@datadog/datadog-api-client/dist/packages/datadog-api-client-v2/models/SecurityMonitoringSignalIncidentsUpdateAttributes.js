"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringSignalIncidentsUpdateAttributes = void 0;
/**
 * Attributes describing the new list of related signals for a security signal.
 */
class SecurityMonitoringSignalIncidentsUpdateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringSignalIncidentsUpdateAttributes.attributeTypeMap;
    }
}
exports.SecurityMonitoringSignalIncidentsUpdateAttributes = SecurityMonitoringSignalIncidentsUpdateAttributes;
/**
 * @ignore
 */
SecurityMonitoringSignalIncidentsUpdateAttributes.attributeTypeMap = {
    incidentIds: {
        baseName: "incident_ids",
        type: "Array<number>",
        required: true,
    },
    version: {
        baseName: "version",
        type: "number",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringSignalIncidentsUpdateAttributes.js.map