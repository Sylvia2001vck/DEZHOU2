"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScheduleUpdateRequest = void 0;
/**
 * A top-level wrapper for a schedule update request, referring to the `data` object with the new details.
 */
class ScheduleUpdateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ScheduleUpdateRequest.attributeTypeMap;
    }
}
exports.ScheduleUpdateRequest = ScheduleUpdateRequest;
/**
 * @ignore
 */
ScheduleUpdateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "ScheduleUpdateRequestData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ScheduleUpdateRequest.js.map