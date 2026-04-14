"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetAgentsResponseDataAttributes = void 0;
class FleetAgentsResponseDataAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetAgentsResponseDataAttributes.attributeTypeMap;
    }
}
exports.FleetAgentsResponseDataAttributes = FleetAgentsResponseDataAttributes;
/**
 * @ignore
 */
FleetAgentsResponseDataAttributes.attributeTypeMap = {
    agents: {
        baseName: "agents",
        type: "Array<FleetAgentAttributes>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FleetAgentsResponseDataAttributes.js.map