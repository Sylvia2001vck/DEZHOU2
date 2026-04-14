"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentNotificationRuleResponseData = void 0;
/**
 * Notification rule data from a response.
 */
class IncidentNotificationRuleResponseData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentNotificationRuleResponseData.attributeTypeMap;
    }
}
exports.IncidentNotificationRuleResponseData = IncidentNotificationRuleResponseData;
/**
 * @ignore
 */
IncidentNotificationRuleResponseData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "IncidentNotificationRuleAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
        format: "uuid",
    },
    relationships: {
        baseName: "relationships",
        type: "IncidentNotificationRuleRelationships",
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
//# sourceMappingURL=IncidentNotificationRuleResponseData.js.map