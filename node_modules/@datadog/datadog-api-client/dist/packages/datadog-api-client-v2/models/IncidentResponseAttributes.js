"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentResponseAttributes = void 0;
/**
 * The incident's attributes from a response.
 */
class IncidentResponseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentResponseAttributes.attributeTypeMap;
    }
}
exports.IncidentResponseAttributes = IncidentResponseAttributes;
/**
 * @ignore
 */
IncidentResponseAttributes.attributeTypeMap = {
    archived: {
        baseName: "archived",
        type: "Date",
        format: "date-time",
    },
    caseId: {
        baseName: "case_id",
        type: "number",
        format: "int64",
    },
    created: {
        baseName: "created",
        type: "Date",
        format: "date-time",
    },
    customerImpactDuration: {
        baseName: "customer_impact_duration",
        type: "number",
        format: "int64",
    },
    customerImpactEnd: {
        baseName: "customer_impact_end",
        type: "Date",
        format: "date-time",
    },
    customerImpactScope: {
        baseName: "customer_impact_scope",
        type: "string",
    },
    customerImpactStart: {
        baseName: "customer_impact_start",
        type: "Date",
        format: "date-time",
    },
    customerImpacted: {
        baseName: "customer_impacted",
        type: "boolean",
    },
    declared: {
        baseName: "declared",
        type: "Date",
        format: "date-time",
    },
    declaredBy: {
        baseName: "declared_by",
        type: "IncidentNonDatadogCreator",
    },
    declaredByUuid: {
        baseName: "declared_by_uuid",
        type: "string",
    },
    detected: {
        baseName: "detected",
        type: "Date",
        format: "date-time",
    },
    fields: {
        baseName: "fields",
        type: "{ [key: string]: IncidentFieldAttributes; }",
    },
    incidentTypeUuid: {
        baseName: "incident_type_uuid",
        type: "string",
    },
    isTest: {
        baseName: "is_test",
        type: "boolean",
    },
    modified: {
        baseName: "modified",
        type: "Date",
        format: "date-time",
    },
    nonDatadogCreator: {
        baseName: "non_datadog_creator",
        type: "IncidentNonDatadogCreator",
    },
    notificationHandles: {
        baseName: "notification_handles",
        type: "Array<IncidentNotificationHandle>",
    },
    publicId: {
        baseName: "public_id",
        type: "number",
        format: "int64",
    },
    resolved: {
        baseName: "resolved",
        type: "Date",
        format: "date-time",
    },
    severity: {
        baseName: "severity",
        type: "IncidentSeverity",
    },
    state: {
        baseName: "state",
        type: "string",
    },
    timeToDetect: {
        baseName: "time_to_detect",
        type: "number",
        format: "int64",
    },
    timeToInternalResponse: {
        baseName: "time_to_internal_response",
        type: "number",
        format: "int64",
    },
    timeToRepair: {
        baseName: "time_to_repair",
        type: "number",
        format: "int64",
    },
    timeToResolve: {
        baseName: "time_to_resolve",
        type: "number",
        format: "int64",
    },
    title: {
        baseName: "title",
        type: "string",
        required: true,
    },
    visibility: {
        baseName: "visibility",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentResponseAttributes.js.map