"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetScheduleCreateRequest = void 0;
/**
 * Request payload for creating a new schedule.
 */
class FleetScheduleCreateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetScheduleCreateRequest.attributeTypeMap;
    }
}
exports.FleetScheduleCreateRequest = FleetScheduleCreateRequest;
/**
 * @ignore
 */
FleetScheduleCreateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "FleetScheduleCreate",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FleetScheduleCreateRequest.js.map