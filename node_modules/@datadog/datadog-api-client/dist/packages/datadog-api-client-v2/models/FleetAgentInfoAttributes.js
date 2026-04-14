"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetAgentInfoAttributes = void 0;
/**
 * Attributes for agent information.
 */
class FleetAgentInfoAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetAgentInfoAttributes.attributeTypeMap;
    }
}
exports.FleetAgentInfoAttributes = FleetAgentInfoAttributes;
/**
 * @ignore
 */
FleetAgentInfoAttributes.attributeTypeMap = {
    agentInfos: {
        baseName: "agent_infos",
        type: "FleetAgentInfoDetails",
    },
    configurationFiles: {
        baseName: "configuration_files",
        type: "FleetConfigurationLayer",
    },
    detectedIntegrations: {
        baseName: "detected_integrations",
        type: "Array<FleetDetectedIntegration>",
    },
    integrations: {
        baseName: "integrations",
        type: "FleetIntegrationsByStatus",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FleetAgentInfoAttributes.js.map