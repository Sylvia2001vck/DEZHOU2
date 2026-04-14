"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IntegrationIncident = void 0;
/**
 * Incident integration settings
 */
class IntegrationIncident {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IntegrationIncident.attributeTypeMap;
    }
}
exports.IntegrationIncident = IntegrationIncident;
/**
 * @ignore
 */
IntegrationIncident.attributeTypeMap = {
    autoEscalationQuery: {
        baseName: "auto_escalation_query",
        type: "string",
    },
    defaultIncidentCommander: {
        baseName: "default_incident_commander",
        type: "string",
    },
    enabled: {
        baseName: "enabled",
        type: "boolean",
    },
    fieldMappings: {
        baseName: "field_mappings",
        type: "Array<IntegrationIncidentFieldMappingsItems>",
    },
    incidentType: {
        baseName: "incident_type",
        type: "string",
    },
    severityConfig: {
        baseName: "severity_config",
        type: "IntegrationIncidentSeverityConfig",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IntegrationIncident.js.map