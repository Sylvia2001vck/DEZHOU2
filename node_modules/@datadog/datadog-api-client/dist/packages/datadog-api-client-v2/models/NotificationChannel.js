"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationChannel = void 0;
/**
 * A top-level wrapper for a user notification channel
 */
class NotificationChannel {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotificationChannel.attributeTypeMap;
    }
}
exports.NotificationChannel = NotificationChannel;
/**
 * @ignore
 */
NotificationChannel.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "NotificationChannelData",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=NotificationChannel.js.map