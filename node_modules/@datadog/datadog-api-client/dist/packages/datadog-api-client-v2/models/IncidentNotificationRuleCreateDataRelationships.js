"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentNotificationRuleCreateDataRelationships = void 0;
/**
 * The definition of `NotificationRuleCreateDataRelationships` object.
 */
class IncidentNotificationRuleCreateDataRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentNotificationRuleCreateDataRelationships.attributeTypeMap;
    }
}
exports.IncidentNotificationRuleCreateDataRelationships = IncidentNotificationRuleCreateDataRelationships;
/**
 * @ignore
 */
IncidentNotificationRuleCreateDataRelationships.attributeTypeMap = {
    incidentType: {
        baseName: "incident_type",
        type: "RelationshipToIncidentType",
    },
    notificationTemplate: {
        baseName: "notification_template",
        type: "RelationshipToIncidentNotificationTemplate",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentNotificationRuleCreateDataRelationships.js.map