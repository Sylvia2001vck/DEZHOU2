"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecurityMonitoringTriageUser = void 0;
/**
 * Object representing a given user entity.
 */
class SecurityMonitoringTriageUser {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return SecurityMonitoringTriageUser.attributeTypeMap;
    }
}
exports.SecurityMonitoringTriageUser = SecurityMonitoringTriageUser;
/**
 * @ignore
 */
SecurityMonitoringTriageUser.attributeTypeMap = {
    handle: {
        baseName: "handle",
        type: "string",
    },
    icon: {
        baseName: "icon",
        type: "string",
    },
    id: {
        baseName: "id",
        type: "number",
        format: "int64",
    },
    name: {
        baseName: "name",
        type: "string",
    },
    uuid: {
        baseName: "uuid",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=SecurityMonitoringTriageUser.js.map