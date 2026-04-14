"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentNotificationRuleRelationships = void 0;
/**
 * The notification rule's resource relationships.
 */
class IncidentNotificationRuleRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentNotificationRuleRelationships.attributeTypeMap;
    }
}
exports.IncidentNotificationRuleRelationships = IncidentNotificationRuleRelationships;
/**
 * @ignore
 */
IncidentNotificationRuleRelationships.attributeTypeMap = {
    createdByUser: {
        baseName: "created_by_user",
        type: "RelationshipToUser",
    },
    incidentType: {
        baseName: "incident_type",
        type: "RelationshipToIncidentType",
    },
    lastModifiedByUser: {
        baseName: "last_modified_by_user",
        type: "RelationshipToUser",
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
//# sourceMappingURL=IncidentNotificationRuleRelationships.js.map