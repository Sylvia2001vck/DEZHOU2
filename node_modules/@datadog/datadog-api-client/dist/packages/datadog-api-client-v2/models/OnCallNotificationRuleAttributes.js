"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnCallNotificationRuleAttributes = void 0;
/**
 * Attributes for an on-call notification rule.
 */
class OnCallNotificationRuleAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OnCallNotificationRuleAttributes.attributeTypeMap;
    }
}
exports.OnCallNotificationRuleAttributes = OnCallNotificationRuleAttributes;
/**
 * @ignore
 */
OnCallNotificationRuleAttributes.attributeTypeMap = {
    category: {
        baseName: "category",
        type: "OnCallNotificationRuleCategory",
    },
    channelSettings: {
        baseName: "channel_settings",
        type: "OnCallNotificationRuleChannelSettings",
    },
    delayMinutes: {
        baseName: "delay_minutes",
        type: "number",
        format: "int64",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OnCallNotificationRuleAttributes.js.map