"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentUpdateAttributes = void 0;
/**
 * The incident's attributes for an update request.
 */
class IncidentUpdateAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentUpdateAttributes.attributeTypeMap;
    }
}
exports.IncidentUpdateAttributes = IncidentUpdateAttributes;
/**
 * @ignore
 */
IncidentUpdateAttributes.attributeTypeMap = {
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
    detected: {
        baseName: "detected",
        type: "Date",
        format: "date-time",
    },
    fields: {
        baseName: "fields",
        type: "{ [key: string]: IncidentFieldAttributes; }",
    },
    notificationHandles: {
        baseName: "notification_handles",
        type: "Array<IncidentNotificationHandle>",
    },
    title: {
        baseName: "title",
        type: "string",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentUpdateAttributes.js.map