"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetScheduleResponse = void 0;
/**
 * Response containing a single schedule.
 */
class FleetScheduleResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetScheduleResponse.attributeTypeMap;
    }
}
exports.FleetScheduleResponse = FleetScheduleResponse;
/**
 * @ignore
 */
FleetScheduleResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "FleetSchedule",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FleetScheduleResponse.js.map