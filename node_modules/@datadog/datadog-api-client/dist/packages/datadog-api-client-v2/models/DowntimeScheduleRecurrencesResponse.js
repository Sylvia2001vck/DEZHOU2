"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DowntimeScheduleRecurrencesResponse = void 0;
/**
 * A recurring downtime schedule definition.
 */
class DowntimeScheduleRecurrencesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DowntimeScheduleRecurrencesResponse.attributeTypeMap;
    }
}
exports.DowntimeScheduleRecurrencesResponse = DowntimeScheduleRecurrencesResponse;
/**
 * @ignore
 */
DowntimeScheduleRecurrencesResponse.attributeTypeMap = {
    currentDowntime: {
        baseName: "current_downtime",
        type: "DowntimeScheduleCurrentDowntimeResponse",
    },
    recurrences: {
        baseName: "recurrences",
        type: "Array<DowntimeScheduleRecurrenceResponse>",
        required: true,
    },
    timezone: {
        baseName: "timezone",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=DowntimeScheduleRecurrencesResponse.js.map