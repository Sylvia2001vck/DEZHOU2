"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DowntimeScheduleOneTimeResponse = void 0;
/**
 * A one-time downtime definition.
 */
class DowntimeScheduleOneTimeResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DowntimeScheduleOneTimeResponse.attributeTypeMap;
    }
}
exports.DowntimeScheduleOneTimeResponse = DowntimeScheduleOneTimeResponse;
/**
 * @ignore
 */
DowntimeScheduleOneTimeResponse.attributeTypeMap = {
    end: {
        baseName: "end",
        type: "Date",
        format: "date-time",
    },
    start: {
        baseName: "start",
        type: "Date",
        required: true,
        format: "date-time",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DowntimeScheduleOneTimeResponse.js.map