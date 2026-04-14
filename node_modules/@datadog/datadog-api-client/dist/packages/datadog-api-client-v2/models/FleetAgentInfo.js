"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetAgentInfo = void 0;
/**
 * Represents detailed information about a specific Datadog Agent.
 */
class FleetAgentInfo {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetAgentInfo.attributeTypeMap;
    }
}
exports.FleetAgentInfo = FleetAgentInfo;
/**
 * @ignore
 */
FleetAgentInfo.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "FleetAgentInfoAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "FleetAgentInfoResourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FleetAgentInfo.js.map