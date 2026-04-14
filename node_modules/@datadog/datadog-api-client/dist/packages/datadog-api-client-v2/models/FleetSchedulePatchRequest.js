"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetSchedulePatchRequest = void 0;
/**
 * Request payload for partially updating a schedule.
 */
class FleetSchedulePatchRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetSchedulePatchRequest.attributeTypeMap;
    }
}
exports.FleetSchedulePatchRequest = FleetSchedulePatchRequest;
/**
 * @ignore
 */
FleetSchedulePatchRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "FleetSchedulePatch",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FleetSchedulePatchRequest.js.map