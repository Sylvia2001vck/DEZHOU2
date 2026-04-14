"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnCallNotificationRuleChannelRelationshipData = void 0;
/**
 * Channel relationship data for creating a notification rule
 */
class OnCallNotificationRuleChannelRelationshipData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OnCallNotificationRuleChannelRelationshipData.attributeTypeMap;
    }
}
exports.OnCallNotificationRuleChannelRelationshipData = OnCallNotificationRuleChannelRelationshipData;
/**
 * @ignore
 */
OnCallNotificationRuleChannelRelationshipData.attributeTypeMap = {
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "NotificationChannelType",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OnCallNotificationRuleChannelRelationshipData.js.map