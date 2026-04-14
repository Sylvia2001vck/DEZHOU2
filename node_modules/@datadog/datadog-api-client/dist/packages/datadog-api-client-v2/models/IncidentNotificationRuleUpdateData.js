"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncidentNotificationRuleUpdateData = void 0;
/**
 * Notification rule data for an update request.
 */
class IncidentNotificationRuleUpdateData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return IncidentNotificationRuleUpdateData.attributeTypeMap;
    }
}
exports.IncidentNotificationRuleUpdateData = IncidentNotificationRuleUpdateData;
/**
 * @ignore
 */
IncidentNotificationRuleUpdateData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "IncidentNotificationRuleCreateAttributes",
        required: true,
    },
    id: {
        baseName: "id",
        type: "string",
        required: true,
        format: "uuid",
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
//# sourceMappingURL=IncidentNotificationRuleUpdateData.js.map