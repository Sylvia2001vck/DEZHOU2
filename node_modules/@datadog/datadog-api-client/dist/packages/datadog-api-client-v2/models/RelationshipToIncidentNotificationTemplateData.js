"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToIncidentNotificationTemplateData = void 0;
/**
 * The notification template relationship data.
 */
class RelationshipToIncidentNotificationTemplateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToIncidentNotificationTemplateData.attributeTypeMap;
    }
}
exports.RelationshipToIncidentNotificationTemplateData = RelationshipToIncidentNotificationTemplateData;
/**
 * @ignore
 */
RelationshipToIncidentNotificationTemplateData.attributeTypeMap = {
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
//# sourceMappingURL=RelationshipToIncidentNotificationTemplateData.js.map