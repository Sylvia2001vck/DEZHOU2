"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentNotificationRuleCreateData = void 0;
/**
 * Notification rule data for a create request.
 */
class IncidentNotificationRuleCreateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentNotificationRuleCreateData.attributeTypeMap;
    }
}
exports.IncidentNotificationRuleCreateData = IncidentNotificationRuleCreateData;
/**
 * @ignore
 */
IncidentNotificationRuleCreateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "IncidentNotificationRuleCreateAttributes",
        required: true,
    },
    relationships: {
        baseName: "relationships",
        type: "IncidentNotificationRuleCreateDataRelationships",
    },
    type: {
        baseName: "type",
        type: "IncidentNotificationRuleType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=IncidentNotificationRuleCreateData.js.map