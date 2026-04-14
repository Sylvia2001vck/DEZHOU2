"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentImportResponseAttributes = void 0;
/**
 * The incident's attributes from an import response.
 */
class IncidentImportResponseAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentImportResponseAttributes.attributeTypeMap;
    }
}
exports.IncidentImportResponseAttributes = IncidentImportResponseAttributes;
/**
 * @ignore
 */
IncidentImportResponseAttributes.attributeTypeMap = {
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
    createdByUuid: {
        baseName: "created_by_uuid",
        type: "string",
    },
    creationIdempotencyKey: {
        baseName: "creation_idempotency_key",
        type: "string",
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
    declared: {
        baseName: "declared",
        type: "Date",
        format: "date-time",
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
    lastModifiedByUuid: {
        baseName: "last_modified_by_uuid",
        type: "string",
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
//# sourceMappingURL=IncidentImportResponseAttributes.js.map