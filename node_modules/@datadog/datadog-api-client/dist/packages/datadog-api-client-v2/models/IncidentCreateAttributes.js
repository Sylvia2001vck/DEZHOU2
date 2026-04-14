"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentCreateAttributes = void 0;
/**
 * The incident's attributes for a create request.
 */
class IncidentCreateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentCreateAttributes.attributeTypeMap;
    }
}
exports.IncidentCreateAttributes = IncidentCreateAttributes;
/**
 * @ignore
 */
IncidentCreateAttributes.attributeTypeMap = {
    customerImpactScope: {
        baseName: "customer_impact_scope",
        type: "string",
    },
    customerImpacted: {
        baseName: "customer_impacted",
        type: "boolean",
        required: true,
    },
    fields: {
        baseName: "fields",
        type: "{ [key: string]: IncidentFieldAttributes; }",
    },
    incidentTypeUuid: {
        baseName: "incident_type_uuid",
        type: "string",
    },
    initialCells: {
        baseName: "initial_cells",
        type: "Array<IncidentTimelineCellCreateAttributes>",
    },
    isTest: {
        baseName: "is_test",
        type: "boolean",
    },
    notificationHandles: {
        baseName: "notification_handles",
        type: "Array<IncidentNotificationHandle>",
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
//# sourceMappingURL=IncidentCreateAttributes.js.map