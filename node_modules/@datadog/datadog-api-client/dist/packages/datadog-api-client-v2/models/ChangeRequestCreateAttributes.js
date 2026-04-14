"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeRequestCreateAttributes = void 0;
/**
 * Attributes for creating a change request.
 */
class ChangeRequestCreateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ChangeRequestCreateAttributes.attributeTypeMap;
    }
}
exports.ChangeRequestCreateAttributes = ChangeRequestCreateAttributes;
/**
 * @ignore
 */
ChangeRequestCreateAttributes.attributeTypeMap = {
    changeRequestLinkedIncidentUuid: {
        baseName: "change_request_linked_incident_uuid",
        type: "string",
    },
    changeRequestMaintenanceWindowQuery: {
        baseName: "change_request_maintenance_window_query",
        type: "string",
    },
    changeRequestPlan: {
        baseName: "change_request_plan",
        type: "string",
    },
    changeRequestRisk: {
        baseName: "change_request_risk",
        type: "ChangeRequestRiskLevel",
    },
    changeRequestType: {
        baseName: "change_request_type",
        type: "ChangeRequestChangeType",
    },
    description: {
        baseName: "description",
        type: "string",
    },
    endDate: {
        baseName: "end_date",
        type: "Date",
        format: "date-time",
    },
    projectId: {
        baseName: "project_id",
        type: "string",
    },
    requestedTeams: {
        baseName: "requested_teams",
        type: "Array<string>",
    },
    startDate: {
        baseName: "start_date",
        type: "Date",
        format: "date-time",
    },
    title: {
        baseName: "title",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ChangeRequestCreateAttributes.js.map