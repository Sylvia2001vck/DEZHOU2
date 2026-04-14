"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetScheduleCreate = void 0;
/**
 * Data for creating a new schedule.
 */
class FleetScheduleCreate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetScheduleCreate.attributeTypeMap;
    }
}
exports.FleetScheduleCreate = FleetScheduleCreate;
/**
 * @ignore
 */
FleetScheduleCreate.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "FleetScheduleCreateAttributes",
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
//# sourceMappingURL=FleetScheduleCreate.js.map