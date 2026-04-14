"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeviceAttributesInterfaceStatuses = void 0;
/**
 * Count of the device interfaces by status
 */
class DeviceAttributesInterfaceStatuses {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DeviceAttributesInterfaceStatuses.attributeTypeMap;
    }
}
exports.DeviceAttributesInterfaceStatuses = DeviceAttributesInterfaceStatuses;
/**
 * @ignore
 */
DeviceAttributesInterfaceStatuses.attributeTypeMap = {
    down: {
        baseName: "down",
        type: "number",
        format: "int64",
    },
    off: {
        baseName: "off",
        type: "number",
        format: "int64",
    },
    up: {
        baseName: "up",
        type: "number",
        format: "int64",
    },
    warning: {
        baseName: "warning",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DeviceAttributesInterfaceStatuses.js.map