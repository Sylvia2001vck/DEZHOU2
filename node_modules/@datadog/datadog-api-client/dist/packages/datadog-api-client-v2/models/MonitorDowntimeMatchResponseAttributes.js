"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonitorDowntimeMatchResponseAttributes = void 0;
/**
 * Downtime match details.
 */
class MonitorDowntimeMatchResponseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return MonitorDowntimeMatchResponseAttributes.attributeTypeMap;
    }
}
exports.MonitorDowntimeMatchResponseAttributes = MonitorDowntimeMatchResponseAttributes;
/**
 * @ignore
 */
MonitorDowntimeMatchResponseAttributes.attributeTypeMap = {
    end: {
        baseName: "end",
        type: "Date",
        format: "date-time",
    },
    groups: {
        baseName: "groups",
        type: "Array<string>",
    },
    scope: {
        baseName: "scope",
        type: "string",
    },
    start: {
        baseName: "start",
        type: "Date",
        format: "date-time",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=MonitorDowntimeMatchResponseAttributes.js.map