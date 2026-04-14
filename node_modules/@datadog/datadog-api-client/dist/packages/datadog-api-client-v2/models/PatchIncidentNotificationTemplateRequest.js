"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PatchIncidentNotificationTemplateRequest = void 0;
/**
 * Update request for a notification template.
 */
class PatchIncidentNotificationTemplateRequest {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return PatchIncidentNotificationTemplateRequest.attributeTypeMap;
    }
}
exports.PatchIncidentNotificationTemplateRequest = PatchIncidentNotificationTemplateRequest;
/**
 * @ignore
 */
PatchIncidentNotificationTemplateRequest.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "IncidentNotificationTemplateUpdateData",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=PatchIncidentNotificationTemplateRequest.js.map