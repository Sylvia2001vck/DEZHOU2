"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DowntimeMonitorIdentifierId = void 0;
/**
 * Object of the monitor identifier.
 */
class DowntimeMonitorIdentifierId {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DowntimeMonitorIdentifierId.attributeTypeMap;
    }
}
exports.DowntimeMonitorIdentifierId = DowntimeMonitorIdentifierId;
/**
 * @ignore
 */
DowntimeMonitorIdentifierId.attributeTypeMap = {
    monitorId: {
        baseName: "monitor_id",
        type: "number",
        required: true,
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DowntimeMonitorIdentifierId.js.map