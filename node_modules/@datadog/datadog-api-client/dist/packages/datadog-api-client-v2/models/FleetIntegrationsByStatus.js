"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FleetIntegrationsByStatus = void 0;
/**
 * Integrations organized by their status.
 */
class FleetIntegrationsByStatus {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return FleetIntegrationsByStatus.attributeTypeMap;
    }
}
exports.FleetIntegrationsByStatus = FleetIntegrationsByStatus;
/**
 * @ignore
 */
FleetIntegrationsByStatus.attributeTypeMap = {
    configurationFiles: {
        baseName: "configuration_files",
        type: "Array<FleetConfigurationFile>",
    },
    datadogAgentKey: {
        baseName: "datadog_agent_key",
        type: "string",
    },
    errorIntegrations: {
        baseName: "error_integrations",
        type: "Array<FleetIntegrationDetails>",
    },
    missingIntegrations: {
        baseName: "missing_integrations",
        type: "Array<FleetDetectedIntegration>",
    },
    warningIntegrations: {
        baseName: "warning_integrations",
        type: "Array<FleetIntegrationDetails>",
    },
    workingIntegrations: {
        baseName: "working_integrations",
        type: "Array<FleetIntegrationDetails>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=FleetIntegrationsByStatus.js.map