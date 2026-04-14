"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectSettings = void 0;
/**
 * Project settings
 */
class ProjectSettings {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ProjectSettings.attributeTypeMap;
    }
}
exports.ProjectSettings = ProjectSettings;
/**
 * @ignore
 */
ProjectSettings.attributeTypeMap = {
    autoCloseInactiveCases: {
        baseName: "auto_close_inactive_cases",
        type: "AutoCloseInactiveCases",
    },
    autoTransitionAssignedCases: {
        baseName: "auto_transition_assigned_cases",
        type: "AutoTransitionAssignedCases",
    },
    integrationIncident: {
        baseName: "integration_incident",
        type: "IntegrationIncident",
    },
    integrationJira: {
        baseName: "integration_jira",
        type: "IntegrationJira",
    },
    integrationMonitor: {
        baseName: "integration_monitor",
        type: "IntegrationMonitor",
    },
    integrationOnCall: {
        baseName: "integration_on_call",
        type: "IntegrationOnCall",
    },
    integrationServiceNow: {
        baseName: "integration_service_now",
        type: "IntegrationServiceNow",
    },
    notification: {
        baseName: "notification",
        type: "ProjectNotificationSettings",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ProjectSettings.js.map