"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetAgentsResponse = void 0;
/**
 * Response containing a paginated list of Datadog Agents.
 */
class FleetAgentsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetAgentsResponse.attributeTypeMap;
    }
}
exports.FleetAgentsResponse = FleetAgentsResponse;
/**
 * @ignore
 */
FleetAgentsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "FleetAgentsResponseData",
        required: true,
    },
    meta: {
        baseName: "meta",
        type: "FleetAgentsResponseMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FleetAgentsResponse.js.map