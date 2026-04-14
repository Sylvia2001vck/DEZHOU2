"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DowntimeMonitorIncludedAttributes = void 0;
/**
 * Attributes of the monitor identified by the downtime.
 */
class DowntimeMonitorIncludedAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DowntimeMonitorIncludedAttributes.attributeTypeMap;
    }
}
exports.DowntimeMonitorIncludedAttributes = DowntimeMonitorIncludedAttributes;
/**
 * @ignore
 */
DowntimeMonitorIncludedAttributes.attributeTypeMap = {
    name: {
        baseName: "name",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DowntimeMonitorIncludedAttributes.js.map