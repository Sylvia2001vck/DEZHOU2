"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOnCallNotificationRuleRequestAttributes = void 0;
/**
 * Attributes for creating or modifying an on-call notification rule.
 */
class UpdateOnCallNotificationRuleRequestAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return UpdateOnCallNotificationRuleRequestAttributes.attributeTypeMap;
    }
}
exports.UpdateOnCallNotificationRuleRequestAttributes = UpdateOnCallNotificationRuleRequestAttributes;
/**
 * @ignore
 */
UpdateOnCallNotificationRuleRequestAttributes.attributeTypeMap = {
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
//# sourceMappingURL=UpdateOnCallNotificationRuleRequestAttributes.js.map