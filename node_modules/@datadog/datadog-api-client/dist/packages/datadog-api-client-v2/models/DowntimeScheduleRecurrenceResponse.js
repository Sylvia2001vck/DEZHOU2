"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DowntimeScheduleRecurrenceResponse = void 0;
/**
 * An RRULE-based recurring downtime.
 */
class DowntimeScheduleRecurrenceResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DowntimeScheduleRecurrenceResponse.attributeTypeMap;
    }
}
exports.DowntimeScheduleRecurrenceResponse = DowntimeScheduleRecurrenceResponse;
/**
 * @ignore
 */
DowntimeScheduleRecurrenceResponse.attributeTypeMap = {
    duration: {
        baseName: "duration",
        type: "string",
    },
    rrule: {
        baseName: "rrule",
        type: "string",
    },
    start: {
        baseName: "start",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DowntimeScheduleRecurrenceResponse.js.map