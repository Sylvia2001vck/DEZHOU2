"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentNotificationTemplateCreateDataRelationships = void 0;
/**
 * The definition of `NotificationTemplateCreateDataRelationships` object.
 */
class IncidentNotificationTemplateCreateDataRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentNotificationTemplateCreateDataRelationships.attributeTypeMap;
    }
}
exports.IncidentNotificationTemplateCreateDataRelationships = IncidentNotificationTemplateCreateDataRelationships;
/**
 * @ignore
 */
IncidentNotificationTemplateCreateDataRelationships.attributeTypeMap = {
    incidentType: {
        baseName: "incident_type",
        type: "RelationshipToIncidentType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentNotificationTemplateCreateDataRelationships.js.map