"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentNotificationTemplateResponseData = void 0;
/**
 * Notification template data from a response.
 */
class IncidentNotificationTemplateResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentNotificationTemplateResponseData.attributeTypeMap;
    }
}
exports.IncidentNotificationTemplateResponseData = IncidentNotificationTemplateResponseData;
/**
 * @ignore
 */
IncidentNotificationTemplateResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "IncidentNotificationTemplateAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
        format: "uuid",
    },
    relationships: {
        baseName: "relationships",
        type: "IncidentNotificationTemplateRelationships",
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
//# sourceMappingURL=IncidentNotificationTemplateResponseData.js.map