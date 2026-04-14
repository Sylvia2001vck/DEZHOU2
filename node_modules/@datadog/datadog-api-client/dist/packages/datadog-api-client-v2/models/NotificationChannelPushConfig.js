"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationChannelPushConfig = void 0;
/**
 * Push notification channel configuration
 */
class NotificationChannelPushConfig {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotificationChannelPushConfig.attributeTypeMap;
    }
}
exports.NotificationChannelPushConfig = NotificationChannelPushConfig;
/**
 * @ignore
 */
NotificationChannelPushConfig.attributeTypeMap = {
    applicationName: {
        baseName: "application_name",
        type: "string",
        required: true,
    },
    deviceName: {
        baseName: "device_name",
        type: "string",
        required: true,
    },
    type: {
        baseName: "type",
        type: "NotificationChannelPushConfigType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=NotificationChannelPushConfig.js.map