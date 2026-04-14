"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetSchedulesResponse = void 0;
/**
 * Response containing a list of schedules.
 */
class FleetSchedulesResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetSchedulesResponse.attributeTypeMap;
    }
}
exports.FleetSchedulesResponse = FleetSchedulesResponse;
/**
 * @ignore
 */
FleetSchedulesResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<FleetSchedule>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FleetSchedulesResponse.js.map