"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentNotificationTemplateRelationships = void 0;
/**
 * The notification template's resource relationships.
 */
class IncidentNotificationTemplateRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentNotificationTemplateRelationships.attributeTypeMap;
    }
}
exports.IncidentNotificationTemplateRelationships = IncidentNotificationTemplateRelationships;
/**
 * @ignore
 */
IncidentNotificationTemplateRelationships.attributeTypeMap = {
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
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentNotificationTemplateRelationships.js.map