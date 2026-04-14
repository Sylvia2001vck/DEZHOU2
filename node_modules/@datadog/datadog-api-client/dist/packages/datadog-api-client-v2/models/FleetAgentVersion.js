"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetAgentVersion = void 0;
/**
 * Represents an available Datadog Agent version.
 */
class FleetAgentVersion {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetAgentVersion.attributeTypeMap;
    }
}
exports.FleetAgentVersion = FleetAgentVersion;
/**
 * @ignore
 */
FleetAgentVersion.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "FleetAgentVersionAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "FleetAgentVersionResourceType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FleetAgentVersion.js.map