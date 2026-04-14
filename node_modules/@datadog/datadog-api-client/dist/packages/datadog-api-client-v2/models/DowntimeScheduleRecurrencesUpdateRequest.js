"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DowntimeScheduleRecurrencesUpdateRequest = void 0;
/**
 * A recurring downtime schedule definition.
 */
class DowntimeScheduleRecurrencesUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return DowntimeScheduleRecurrencesUpdateRequest.attributeTypeMap;
    }
}
exports.DowntimeScheduleRecurrencesUpdateRequest = DowntimeScheduleRecurrencesUpdateRequest;
/**
 * @ignore
 */
DowntimeScheduleRecurrencesUpdateRequest.attributeTypeMap = {
    recurrences: {
        baseName: "recurrences",
        type: "Array<DowntimeScheduleRecurrenceCreateUpdateRequest>",
    },
    timezone: {
        baseName: "timezone",
        type: "string",
    },
};
//# sourceMappingURL=DowntimeScheduleRecurrencesUpdateRequest.js.map