"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelationshipToIncidentNotificationTemplate = void 0;
/**
 * A relationship reference to a notification template.
 */
class RelationshipToIncidentNotificationTemplate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return RelationshipToIncidentNotificationTemplate.attributeTypeMap;
    }
}
exports.RelationshipToIncidentNotificationTemplate = RelationshipToIncidentNotificationTemplate;
/**
 * @ignore
 */
RelationshipToIncidentNotificationTemplate.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "RelationshipToIncidentNotificationTemplateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=RelationshipToIncidentNotificationTemplate.js.map