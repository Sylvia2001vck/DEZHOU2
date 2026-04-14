"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentNotificationTemplateUpdateData = void 0;
/**
 * Notification template data for an update request.
 */
class IncidentNotificationTemplateUpdateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentNotificationTemplateUpdateData.attributeTypeMap;
    }
}
exports.IncidentNotificationTemplateUpdateData = IncidentNotificationTemplateUpdateData;
/**
 * @ignore
 */
IncidentNotificationTemplateUpdateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "IncidentNotificationTemplateUpdateAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
        format: "uuid",
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
//# sourceMappingURL=IncidentNotificationTemplateUpdateData.js.map