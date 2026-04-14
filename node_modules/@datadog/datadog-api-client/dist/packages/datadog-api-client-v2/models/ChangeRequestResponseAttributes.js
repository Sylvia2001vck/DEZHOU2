"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeRequestResponseAttributes = void 0;
/**
 * Attributes of a change request response.
 */
class ChangeRequestResponseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ChangeRequestResponseAttributes.attributeTypeMap;
    }
}
exports.ChangeRequestResponseAttributes = ChangeRequestResponseAttributes;
/**
 * @ignore
 */
ChangeRequestResponseAttributes.attributeTypeMap = {
    archivedAt: {
        baseName: "archived_at",
        type: "Date",
        format: "date-time",
    },
    attributes: {
        baseName: "attributes",
        type: "{ [key: string]: Array<string>; }",
        required: true,
    },
    changeRequestLinkedIncidentUuid: {
        baseName: "change_request_linked_incident_uuid",
        type: "string",
        required: true,
    },
    changeRequestMaintenanceWindowQuery: {
        baseName: "change_request_maintenance_window_query",
        type: "string",
        required: true,
    },
    changeRequestPlan: {
        baseName: "change_request_plan",
        type: "string",
        required: true,
    },
    changeRequestRisk: {
        baseName: "change_request_risk",
        type: "ChangeRequestRiskLevel",
        required: true,
    },
    changeRequestType: {
        baseName: "change_request_type",
        type: "ChangeRequestChangeType",
        required: true,
    },
    closedAt: {
        baseName: "closed_at",
        type: "Date",
        format: "date-time",
    },
    createdAt: {
        baseName: "created_at",
        type: "Date",
        required: true,
        format: "date-time",
    },
    creationSource: {
        baseName: "creation_source",
        type: "string",
        required: true,
    },
    description: {
        baseName: "description",
        type: "string",
        required: true,
    },
    endDate: {
        baseName: "end_date",
        type: "Date",
        format: "date-time",
    },
    key: {
        baseName: "key",
        type: "string",
        required: true,
    },
    modifiedAt: {
        baseName: "modified_at",
        type: "Date",
        required: true,
        format: "date-time",
    },
    planNotebookId: {
        baseName: "plan_notebook_id",
        type: "number",
        required: true,
        format: "int64",
    },
    priority: {
        baseName: "priority",
        type: "string",
        required: true,
    },
    projectId: {
        baseName: "project_id",
        type: "string",
        required: true,
    },
    startDate: {
        baseName: "start_date",
        type: "Date",
        format: "date-time",
    },
    status: {
        baseName: "status",
        type: "string",
        required: true,
    },
    title: {
        baseName: "title",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "string",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ChangeRequestResponseAttributes.js.map