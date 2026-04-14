"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DowntimeScheduleRecurrencesCreateRequest = void 0;
/**
 * A recurring downtime schedule definition.
 */
class DowntimeScheduleRecurrencesCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DowntimeScheduleRecurrencesCreateRequest.attributeTypeMap;
    }
}
exports.DowntimeScheduleRecurrencesCreateRequest = DowntimeScheduleRecurrencesCreateRequest;
/**
 * @ignore
 */
DowntimeScheduleRecurrencesCreateRequest.attributeTypeMap = {
    recurrences: {
        baseName: "recurrences",
        type: "Array<DowntimeScheduleRecurrenceCreateUpdateRequest>",
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
//# sourceMappingURL=DowntimeScheduleRecurrencesCreateRequest.js.map