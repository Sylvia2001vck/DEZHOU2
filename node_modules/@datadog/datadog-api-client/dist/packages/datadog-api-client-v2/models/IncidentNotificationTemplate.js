"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentNotificationTemplate = void 0;
/**
 * Response with a notification template.
 */
class IncidentNotificationTemplate {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentNotificationTemplate.attributeTypeMap;
    }
}
exports.IncidentNotificationTemplate = IncidentNotificationTemplate;
/**
 * @ignore
 */
IncidentNotificationTemplate.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IncidentNotificationTemplateResponseData",
        required: true,
    },
    included: {
        baseName: "included",
        type: "Array<IncidentNotificationTemplateIncludedItems>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentNotificationTemplate.js.map