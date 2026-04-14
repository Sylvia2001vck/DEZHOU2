"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnCallNotificationRuleRelationships = void 0;
/**
 * Relationship object for creating a notification rule
 */
class OnCallNotificationRuleRelationships {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OnCallNotificationRuleRelationships.attributeTypeMap;
    }
}
exports.OnCallNotificationRuleRelationships = OnCallNotificationRuleRelationships;
/**
 * @ignore
 */
OnCallNotificationRuleRelationships.attributeTypeMap = {
    channel: {
        baseName: "channel",
        type: "OnCallNotificationRuleChannelRelationship",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OnCallNotificationRuleRelationships.js.map