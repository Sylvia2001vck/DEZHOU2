"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetScheduleRecurrenceRule = void 0;
/**
 * Defines the recurrence pattern for the schedule. Specifies when deployments should be
 * automatically triggered based on maintenance windows.
 */
class FleetScheduleRecurrenceRule {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetScheduleRecurrenceRule.attributeTypeMap;
    }
}
exports.FleetScheduleRecurrenceRule = FleetScheduleRecurrenceRule;
/**
 * @ignore
 */
FleetScheduleRecurrenceRule.attributeTypeMap = {
    daysOfWeek: {
        baseName: "days_of_week",
        type: "Array<string>",
        required: true,
    },
    maintenanceWindowDuration: {
        baseName: "maintenance_window_duration",
        type: "number",
        required: true,
        format: "int64",
    },
    startMaintenanceWindow: {
        baseName: "start_maintenance_window",
        type: "string",
        required: true,
    },
    timezone: {
        baseName: "timezone",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FleetScheduleRecurrenceRule.js.map