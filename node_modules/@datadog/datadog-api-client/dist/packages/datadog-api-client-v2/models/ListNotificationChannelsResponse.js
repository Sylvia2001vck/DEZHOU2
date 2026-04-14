"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListNotificationChannelsResponse = void 0;
/**
 * Response type for listing notification channels for a user
 */
class ListNotificationChannelsResponse {
    constructor() { }
    /**
     * @ignore
     */
    static getAttributeTypeMap() {
        return ListNotificationChannelsResponse.attributeTypeMap;
    }
}
exports.ListNotificationChannelsResponse = ListNotificationChannelsResponse;
/**
 * @ignore
 */
ListNotificationChannelsResponse.attributeTypeMap = {
    data: {
        baseName: "data",
        type: "Array<NotificationChannelData>",
    },
    additionalProperties: {
        baseName: "additionalProperties",
        type: "{ [key: string]: any; }",
    },
};
//# sourceMappingURL=ListNotificationChannelsResponse.js.map