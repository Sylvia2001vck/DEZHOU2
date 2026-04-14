"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationChannelData = void 0;
/**
 * Data for an on-call notification channel
 */
class NotificationChannelData {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return NotificationChannelData.attributeTypeMap;
    }
}
exports.NotificationChannelData = NotificationChannelData;
/**
 * @ignore
 */
NotificationChannelData.attributeTypeMap = {
    attributes: {
        baseName: "attributes",
        type: "NotificationChannelAttributes",
    },
    id: {
        baseName: "id",
        type: "string",
    },
    type: {
        baseName: "type",
        type: "NotificationChannelType",
        required: true,
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=NotificationChannelData.js.map