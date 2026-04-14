"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetSchedule = void 0;
/**
 * A schedule that automatically creates deployments based on a recurrence rule.
 */
class FleetSchedule {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetSchedule.attributeTypeMap;
    }
}
exports.FleetSchedule = FleetSchedule;
/**
 * @ignore
 */
FleetSchedule.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "FleetScheduleAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "FleetScheduleResourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FleetSchedule.js.map