"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentNotificationTemplateArray = void 0;
/**
 * Response with notification templates.
 */
class IncidentNotificationTemplateArray {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentNotificationTemplateArray.attributeTypeMap;
    }
}
exports.IncidentNotificationTemplateArray = IncidentNotificationTemplateArray;
/**
 * @ignore
 */
IncidentNotificationTemplateArray.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<IncidentNotificationTemplateResponseData>",
        required: true,
    },
    included: {
        baseName: "included",
        type: "Array<IncidentNotificationTemplateIncludedItems>",
    },
    meta: {
        baseName: "meta",
        type: "IncidentNotificationTemplateArrayMeta",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentNotificationTemplateArray.js.map