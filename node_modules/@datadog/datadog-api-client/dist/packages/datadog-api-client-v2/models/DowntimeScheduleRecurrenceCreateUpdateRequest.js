"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DowntimeScheduleRecurrenceCreateUpdateRequest = void 0;
/**
 * An object defining the recurrence of the downtime.
 */
class DowntimeScheduleRecurrenceCreateUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DowntimeScheduleRecurrenceCreateUpdateRequest.attributeTypeMap;
    }
}
exports.DowntimeScheduleRecurrenceCreateUpdateRequest = DowntimeScheduleRecurrenceCreateUpdateRequest;
/**
 * @ignore
 */
DowntimeScheduleRecurrenceCreateUpdateRequest.attributeTypeMap = {
    duration: {
        baseName: "duration",
        type: "string",
        required: true,
    },
    rrule: {
        baseName: "rrule",
        type: "string",
        required: true,
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
//# sourceMappingURL=DowntimeScheduleRecurrenceCreateUpdateRequest.js.map