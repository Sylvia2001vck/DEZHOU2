"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnCallNotificationRuleRequestAttributes = void 0;
/**
 * Attributes for creating or modifying an on-call notification rule.
 */
class OnCallNotificationRuleRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OnCallNotificationRuleRequestAttributes.attributeTypeMap;
    }
}
exports.OnCallNotificationRuleRequestAttributes = OnCallNotificationRuleRequestAttributes;
/**
 * @ignore
 */
OnCallNotificationRuleRequestAttributes.attributeTypeMap = {
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
//# sourceMappingURL=OnCallNotificationRuleRequestAttributes.js.map