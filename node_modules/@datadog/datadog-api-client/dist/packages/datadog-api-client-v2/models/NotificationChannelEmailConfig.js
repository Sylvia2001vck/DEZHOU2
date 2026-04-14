"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationChannelEmailConfig = void 0;
/**
 * Email notification channel configuration
 */
class NotificationChannelEmailConfig {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotificationChannelEmailConfig.attributeTypeMap;
    }
}
exports.NotificationChannelEmailConfig = NotificationChannelEmailConfig;
/**
 * @ignore
 */
NotificationChannelEmailConfig.attributeTypeMap = {
    address: {
        baseName: "address",
        type: "string",
        required: true,
    },
    formats: {
        baseName: "formats",
        type: "Array<NotificationChannelEmailFormatType>",
        required: true,
    },
    type: {
        baseName: "type",
        type: "NotificationChannelEmailConfigType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=NotificationChannelEmailConfig.js.map