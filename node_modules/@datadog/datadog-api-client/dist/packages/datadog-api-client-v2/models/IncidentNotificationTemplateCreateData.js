"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentNotificationTemplateCreateData = void 0;
/**
 * Notification template data for a create request.
 */
class IncidentNotificationTemplateCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentNotificationTemplateCreateData.attributeTypeMap;
    }
}
exports.IncidentNotificationTemplateCreateData = IncidentNotificationTemplateCreateData;
/**
 * @ignore
 */
IncidentNotificationTemplateCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "IncidentNotificationTemplateCreateAttributes",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "IncidentNotificationTemplateCreateDataRelationships",
    },
    type: {
        baseName: "type",
        type: "IncidentNotificationTemplateType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentNotificationTemplateCreateData.js.map