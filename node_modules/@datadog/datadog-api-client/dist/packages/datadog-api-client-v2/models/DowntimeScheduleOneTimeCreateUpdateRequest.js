"use strict";
/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.DowntimeScheduleOneTimeCreateUpdateRequest = void 0;
/**
 * A one-time downtime definition.
 */
class DowntimeScheduleOneTimeCreateUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DowntimeScheduleOneTimeCreateUpdateRequest.attributeTypeMap;
    }
}
exports.DowntimeScheduleOneTimeCreateUpdateRequest = DowntimeScheduleOneTimeCreateUpdateRequest;
/**
 * @ignore
 */
DowntimeScheduleOneTimeCreateUpdateRequest.attributeTypeMap = {
    end: {
        baseName: "end",
        type: "Date",
        format: "date-time",
    },
    start: {
        baseName: "start",
        type: "Date",
        format: "date-time",
    },
};
//# sourceMappingURL=DowntimeScheduleOneTimeCreateUpdateRequest.js.map