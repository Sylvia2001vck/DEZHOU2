"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationChannelPhoneConfig = void 0;
/**
 * Phone notification channel configuration
 */
class NotificationChannelPhoneConfig {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotificationChannelPhoneConfig.attributeTypeMap;
    }
}
exports.NotificationChannelPhoneConfig = NotificationChannelPhoneConfig;
/**
 * @ignore
 */
NotificationChannelPhoneConfig.attributeTypeMap = {
    formattedNumber: {
        baseName: "formatted_number",
        type: "string",
        required: true,
    },
    number: {
        baseName: "number",
        type: "string",
        required: true,
    },
    region: {
        baseName: "region",
        type: "string",
        required: true,
    },
    smsSubscribedAt: {
        baseName: "sms_subscribed_at",
        type: "Date",
        format: "date-time",
    },
    type: {
        baseName: "type",
        type: "NotificationChannelPhoneConfigType",
        required: true,
    },
    verified: {
        baseName: "verified",
        type: "boolean",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=NotificationChannelPhoneConfig.js.map