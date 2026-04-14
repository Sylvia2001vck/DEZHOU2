"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnCallPhoneNotificationRuleSettings = void 0;
/**
 * Configuration for using a phone notification channel in a notification rule
 */
class OnCallPhoneNotificationRuleSettings {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return OnCallPhoneNotificationRuleSettings.attributeTypeMap;
    }
}
exports.OnCallPhoneNotificationRuleSettings = OnCallPhoneNotificationRuleSettings;
/**
 * @ignore
 */
OnCallPhoneNotificationRuleSettings.attributeTypeMap = {
    method: {
        baseName: "method",
        type: "OnCallPhoneNotificationRuleMethod",
        required: true,
    },
    type: {
        baseName: "type",
        type: "NotificationChannelPhoneConfigType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=OnCallPhoneNotificationRuleSettings.js.map