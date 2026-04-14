"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentNotificationTemplateObject = void 0;
/**
 * A notification template object for inclusion in other resources.
 */
class IncidentNotificationTemplateObject {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentNotificationTemplateObject.attributeTypeMap;
    }
}
exports.IncidentNotificationTemplateObject = IncidentNotificationTemplateObject;
/**
 * @ignore
 */
IncidentNotificationTemplateObject.attributeTypeMap = {
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
//# sourceMappingURL=IncidentNotificationTemplateObject.js.map