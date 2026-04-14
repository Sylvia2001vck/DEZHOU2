"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetAgentInfoResponse = void 0;
/**
 * Response containing detailed information about a specific agent.
 */
class FleetAgentInfoResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetAgentInfoResponse.attributeTypeMap;
    }
}
exports.FleetAgentInfoResponse = FleetAgentInfoResponse;
/**
 * @ignore
 */
FleetAgentInfoResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "FleetAgentInfo",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FleetAgentInfoResponse.js.map