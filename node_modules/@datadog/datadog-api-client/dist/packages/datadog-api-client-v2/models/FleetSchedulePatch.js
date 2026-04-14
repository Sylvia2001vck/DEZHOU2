"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetSchedulePatch = void 0;
/**
 * Data for partially updating a schedule.
 */
class FleetSchedulePatch {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetSchedulePatch.attributeTypeMap;
    }
}
exports.FleetSchedulePatch = FleetSchedulePatch;
/**
 * @ignore
 */
FleetSchedulePatch.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "FleetSchedulePatchAttributes",
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
//# sourceMappingURL=FleetSchedulePatch.js.map