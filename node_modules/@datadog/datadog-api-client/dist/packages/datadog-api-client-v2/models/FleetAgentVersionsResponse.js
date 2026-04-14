"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetAgentVersionsResponse = void 0;
/**
 * Response containing a list of available Agent versions.
 */
class FleetAgentVersionsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetAgentVersionsResponse.attributeTypeMap;
    }
}
exports.FleetAgentVersionsResponse = FleetAgentVersionsResponse;
/**
 * @ignore
 */
FleetAgentVersionsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<FleetAgentVersion>",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FleetAgentVersionsResponse.js.map