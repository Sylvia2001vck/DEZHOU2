"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationChannelAttributes = void 0;
/**
 * Attributes for an on-call notification channel.
 */
class NotificationChannelAttributes {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotificationChannelAttributes.attributeTypeMap;
    }
}
exports.NotificationChannelAttributes = NotificationChannelAttributes;
/**
 * @ignore
 */
NotificationChannelAttributes.attributeTypeMap = {
    active: {
        baseName: "active",
        type: "boolean",
    },
    config: {
        baseName: "config",
        type: "NotificationChannelConfig",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=NotificationChannelAttributes.js.map